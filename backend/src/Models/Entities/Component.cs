using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities
{
    public class Component
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public required string Name { get; set; }

        public required string Unit { get; set; }

        public double? Value { get; set; }
        public double? StandardDeviation { get; set; }
        public double? MinValue { get; set; }
        public double? MaxValue { get; set; }
        public int? DataCount { get; set; }
        public string? References { get; set; }
        public string? DataType { get; set; }

        [ForeignKey("FoodItem")]
        public required string FoodItemCode { get; set; }

        public required FoodItem FoodItem { get; set; }
    }
}