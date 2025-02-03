using backend.Data;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Adicionando o serviço de log
builder.Services.AddLogging();

// Adiciona os serviços da aplicação
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Conexão com o banco de dados, agora usando as variáveis de ambiente
builder.Services.AddDbContext<AppDbContext>(options =>
{
    var dbConnection = builder.Configuration["DbConnection"]; // Usando a variável de ambiente DbConnection
    if (string.IsNullOrEmpty(dbConnection))
    {
        throw new InvalidOperationException("A string de conexão do banco de dados não foi configurada.");
    }
    options.UseNpgsql(dbConnection);
});

builder.Services.AddHttpClient<IWebScrapingService, WebScrapingService>();
builder.Services.AddScoped<IFoodItemService, FoodItemService>();
builder.Services.AddScoped<IComponentService, ComponentService>();
builder.Services.AddScoped<DatabaseSeeder>(); // Adiciona o seeder com Logger

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Chama o Seeder assim que a aplicação for iniciada
using (var scope = app.Services.CreateScope())
{
    var seeder = scope.ServiceProvider.GetRequiredService<DatabaseSeeder>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<DatabaseSeeder>>();  // Obtém o Logger

    // Logando quando o Seeder for iniciado
    logger.LogInformation("Iniciando o processo de Seed no banco de dados...");

    await seeder.SeedAsync();

    // Logando quando o Seeder for concluído
    logger.LogInformation("Processo de Seed concluído.");
}

app.Run();
