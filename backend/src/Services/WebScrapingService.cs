using HtmlAgilityPack;
using backend.Models.Entities;


namespace backend.Services
{
    public interface IWebScrapingService
    {
        Task<List<FoodItem>> ScrapeFoodItemsAsync();
        Task<List<Component>> ScrapeComponentsAsync(FoodItem foodItem);
    }

    public class WebScrapingService : IWebScrapingService
    {
        private readonly HttpClient _httpClient;

        public WebScrapingService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<FoodItem>> ScrapeFoodItemsAsync()
        {
            var foodItems = new List<FoodItem>();
            int page = 1;
            bool hasMorePages = true;

            while (hasMorePages)
            {
                var url = $"https://www.tbca.net.br/base-dados/composicao_estatistica.php?pagina={page}";
                var html = await _httpClient.GetStringAsync(url);
                var doc = new HtmlDocument();
                doc.LoadHtml(html);

                var rows = doc.DocumentNode.SelectNodes("//table/tbody/tr");
                if (rows == null || rows.Count == 0)
                {
                    hasMorePages = false;
                    break;
                }

                foreach (var row in rows)
                {
                    var codeNode = row.SelectSingleNode(".//td[1]/a");
                    var nameNode = row.SelectSingleNode(".//td[2]/a");
                    var scientificNameNode = row.SelectSingleNode(".//td[3]/a");
                    var groupNode = row.SelectSingleNode(".//td[4]/a");
                    var brandNode = row.SelectSingleNode(".//td[5]/a");

                    if (codeNode != null && nameNode != null)
                    {
                        var foodItem = new FoodItem
                        {
                            Code = codeNode.InnerText,
                            Name = nameNode.InnerText,
                            ScientificName = scientificNameNode?.InnerText,
                            Group = groupNode.InnerText,
                            Brand = brandNode?.InnerText
                        };

                        var components = await ScrapeComponentsAsync(foodItem);

                        foodItem.Components = components;

                        foodItems.Add(foodItem);
                    }
                }

                page++;
            }

            return foodItems;
        }

        public async Task<List<Component>> ScrapeComponentsAsync(FoodItem foodItem)
        {
            var components = new List<Component>();
            var url = $"https://www.tbca.net.br/base-dados/int_composicao_estatistica.php?cod_produto={foodItem.Code}";
            var html = await _httpClient.GetStringAsync(url);
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var rows = doc.DocumentNode.SelectNodes("//table[@id='tabela1']/tbody/tr");

            if (rows != null)
            {
                foreach (var row in rows)
                {
                    var name = row.SelectSingleNode(".//td[1]").InnerText.Trim();
                    var unit = row.SelectSingleNode(".//td[2]").InnerText.Trim();
                    var value = row.SelectSingleNode(".//td[3]").InnerText.Trim();
                    var stdDev = row.SelectSingleNode(".//td[4]").InnerText.Trim();
                    var minValue = row.SelectSingleNode(".//td[5]").InnerText.Trim();
                    var maxValue = row.SelectSingleNode(".//td[6]").InnerText.Trim();
                    var dataCount = row.SelectSingleNode(".//td[7]").InnerText.Trim();
                    var references = row.SelectSingleNode(".//td[8]").InnerText.Trim();
                    var dataType = row.SelectSingleNode(".//td[9]").InnerText.Trim();

                    components.Add(new Component
                    {
                        Name = name,
                        Unit = unit,
                        Value = double.TryParse(value, out var v) ? v : (double?)null,
                        StandardDeviation = double.TryParse(stdDev, out var sd) ? sd : (double?)null,
                        MinValue = double.TryParse(minValue, out var min) ? min : (double?)null,
                        MaxValue = double.TryParse(maxValue, out var max) ? max : (double?)null,
                        DataCount = int.TryParse(dataCount, out var count) ? count : (int?)null,
                        References = references,
                        DataType = dataType,
                        FoodItem = foodItem,  
                        FoodItemCode = foodItem.Code 
                    });
                }
            }

            return components;
        }


    }
}
