using System;

namespace iFood.Domain.Aggregates
{
    public interface IAggregateRoot
    {
        public Guid Id { get; }
    }
}
