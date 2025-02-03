using backend.Data;
using backend.Services;

public class DatabaseSeeder
{
    private readonly AppDbContext _context;
    private readonly IWebScrapingService _scrapingService;
    private readonly ILogger<DatabaseSeeder> _logger;

    public DatabaseSeeder(AppDbContext context, IWebScrapingService scrapingService, ILogger<DatabaseSeeder> logger)
    {
        _context = context;
        _scrapingService = scrapingService;
        _logger = logger;
    }

    public async Task SeedAsync()
    {
        _logger.LogInformation("Iniciando o processo de seed...");

        // Verifica se o banco está vazio
        if (!_context.FoodItems.Any())
        {
            _logger.LogInformation("Banco de dados está vazio. Iniciando o scraping dos dados...");

            var foodItems = await _scrapingService.ScrapeFoodItemsAsync();

            if (foodItems.Any())
            {
                _logger.LogInformation($"Scraping concluído. {foodItems.Count} itens alimentícios encontrados.");

                _logger.LogInformation("Inserindo os dados no banco de dados...");
                await _context.FoodItems.AddRangeAsync(foodItems);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Inserção concluída com sucesso.");
            }
            else
            {
                _logger.LogWarning("Nenhum item alimentício encontrado durante o scraping.");
            }
        }
        else
        {
            _logger.LogInformation("O banco de dados já contém dados. O processo de seed será ignorado.");
        }

        _logger.LogInformation("Processo de seed concluído.");
    }
}
