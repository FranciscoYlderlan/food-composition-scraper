using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {
            
        }
        public DbSet<FoodItem> FoodItems { get; set; }
        public DbSet<Component> Components { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<FoodItem>()
                .HasKey(f => f.Code);

            modelBuilder.Entity<Component>()
                .HasKey(c => c.Id);

            modelBuilder.Entity<Component>()
                .HasOne(c => c.FoodItem)
                .WithMany(f => f.Components)
                .HasForeignKey(c => c.FoodItemCode)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
