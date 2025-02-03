using backend.Data;
using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public interface IComponentService
    {
        Task<IEnumerable<Component>> GetComponentsByFoodItemCodeAsync(string foodItemCode);
    }

    public class ComponentService : IComponentService
    {
        private readonly AppDbContext _context;

        public ComponentService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Component>> GetComponentsByFoodItemCodeAsync(string foodItemCode)
        {
            return await _context.Components
                .Where(c => c.FoodItemCode == foodItemCode)
                .ToListAsync();
        }
    }
}
