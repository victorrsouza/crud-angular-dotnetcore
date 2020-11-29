using System;

namespace iFood.Domain.Aggregates
{
    public class Product : IAggregateRoot
    {
        public Guid Id { get; private set; }

        public string Name { get; private set; }

        public decimal Value { get; private set; }

        public string Image { get; private set; }

        public Product(Guid id, string name, decimal value, string image)
        {
            Id = id;
            Name = name;
            Value = value;
            Image = image;
        }

        public void Update(string name, decimal value, string image)
        {
            Name = name;
            Value = value;
            Image = image;
        }
    }
}
