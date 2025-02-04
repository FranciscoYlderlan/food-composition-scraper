using HtmlAgilityPack;
using backend.Models.Entities;
using Microsoft.Extensions.Logging;
using backend.Data;

namespace backend.Services
{
    public interface IWebScrapingService
    {
        Task ScrapeAndInsertFoodItemsAsync();
    }

    public class WebScrapingService : IWebScrapingService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<WebScrapingService> _logger;
        private readonly AppDbContext _context;

        public WebScrapingService(HttpClient httpClient, ILogger<WebScrapingService> logger, AppDbContext context)
        {
            _httpClient = httpClient;
            _logger = logger;
            _context = context;
        }

        public async Task ScrapeAndInsertFoodItemsAsync()
        {
            int page = 1;
            bool hasMorePages = true;

            while (hasMorePages)
            {
                _logger.LogInformation("Iniciando a iteração na página {Page}", page);

                var url = $"https://www.tbca.net.br/base-dados/composicao_estatistica.php?pagina={page}";
                var html = await _httpClient.GetStringAsync(url);
                var doc = new HtmlDocument();
                doc.LoadHtml(html);

                var rows = doc.DocumentNode.SelectNodes("//table/tbody/tr");

                if (rows == null || rows.Count == 0)
                {
                    _logger.LogInformation("Nenhuma comida encontrada na página {Page}. Finalizando...", page);
                    hasMorePages = false;
                    break;
                }

                var foodItemsBatch = new List<FoodItem>();
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

                        _logger.LogInformation("Extraindo componentes para o item {FoodItemCode}: {FoodItemName}", foodItem.Code, foodItem.Name);
                        var components = await ScrapeComponentsAsync(foodItem);

                        foodItem.Components = components;
                        foodItemsBatch.Add(foodItem);
                    }
                }

                if (foodItemsBatch.Any())
                {
                    _logger.LogInformation("Inserindo lote de {FoodItemsCount} itens no banco de dados...", foodItemsBatch.Count);
                    await _context.FoodItems.AddRangeAsync(foodItemsBatch);
                    await _context.SaveChangesAsync();
                    _logger.LogInformation("Lote inserido com sucesso.");
                }

                page++;
            }

            _logger.LogInformation("Scraping completo. Total de itens alimentícios inseridos.");
        }

        public async Task<List<Component>> ScrapeComponentsAsync(FoodItem foodItem)
        {
            var components = new List<Component>();
            var url = $"https://www.tbca.net.br/base-dados/int_composicao_estatistica.php?cod_produto={foodItem.Code}";
            _logger.LogInformation("Iniciando a extração de componentes para o item {FoodItemCode}", foodItem.Code);

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

            _logger.LogInformation("Extração de componentes para o item {FoodItemCode} concluída com {ComponentCount} componentes.", foodItem.Code, components.Count);
            return components;
        }
    }
}
