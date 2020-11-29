using iFood.Domain.Aggregates;
using System;

namespace iFood.Application.ReadModels
{
    public class ProductReadModel : IReadModel
    {
        public Guid Id { get; private set; }

        public string Name { get; private set; }

        public decimal Value { get; private set; }

        public string Image { get; private set; }

        public static ProductReadModel Create(Product aggregate)
        {
            return new ProductReadModel
            {
                Id = aggregate.Id,
                Name = aggregate.Name,
                Value = aggregate.Value,
                Image = aggregate.Image
            };
        }
    }
}
