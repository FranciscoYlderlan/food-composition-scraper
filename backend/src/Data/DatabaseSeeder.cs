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

        bool isDatabaseEmpty = !_context.FoodItems.Any();

        if (isDatabaseEmpty)
        {
            _logger.LogInformation("Banco de dados está vazio. Iniciando o scraping dos dados...");
            await _scrapingService.ScrapeAndInsertFoodItemsAsync();
        }
        else
        {
            _logger.LogInformation("O banco de dados já contém dados. O processo de seed será ignorado.");
        }

        _logger.LogInformation("Processo de seed concluído.");
    }
}
