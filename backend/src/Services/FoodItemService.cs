using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public interface IFoodItemService
    {
        Task<(IEnumerable<FoodItem> Items, int TotalItems, int TotalPages)> GetFoodItemsAsync(string? search, int page, int pageSize);
    }

    public class FoodItemService : IFoodItemService
    {
        private readonly AppDbContext _context;

        public FoodItemService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(IEnumerable<FoodItem>, int, int)> GetFoodItemsAsync(string? search, int page, int pageSize)
        {
            var query = _context.FoodItems.AsQueryable();

            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(f => f.Name.ToLower().Contains(search.ToLower()));
            }

            int totalItems = await query.CountAsync();
            int totalPages = (int)Math.Ceiling((double)totalItems / pageSize);

            var items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

            return (items, totalItems, totalPages);
        }
    }
}
