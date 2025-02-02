using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace backend.Models.Entities
{
    public class FoodItem
    {
        [Key]
        public required string Code { get; set; }

        [Required]
        public required string Name { get; set; }

        public string? ScientificName { get; set; }

        [Required]
        public required string Group { get; set; }

        public string? Brand { get; set; }

        public ICollection<Component> Components { get; set; } = new List<Component>();
    }
}
