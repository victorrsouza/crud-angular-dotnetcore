using iFood.Domain.Aggregates;
using iFood.Infrastructure.Mappings;
using Microsoft.EntityFrameworkCore;

namespace iFood.Infrastructure.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductMap());
        }

        public DbSet<Product> Products { get; set; }

    }
}
