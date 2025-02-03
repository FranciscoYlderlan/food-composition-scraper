using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public interface IFoodItemService
    {
        Task<IEnumerable<FoodItem>> GetFoodItemsAsync(string? search, int page, int pageSize);
    }

    public class FoodItemService : IFoodItemService
    {
        private readonly AppDbContext _context;

        public FoodItemService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FoodItem>> GetFoodItemsAsync(string? search, int page, int pageSize)
        {
            var query = _context.FoodItems.AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(f => f.Name.Contains(search));
            }

            return await query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
    }
}
