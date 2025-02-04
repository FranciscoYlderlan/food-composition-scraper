using backend.Models.Entities;

namespace backend.Dtos
{
    public class PagedFoodItemsResponse
    {
        public required IEnumerable<FoodItem> Items { get; set; }
        public required Pagination Pagination { get; set; }
    }
}
