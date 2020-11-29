using iFood.Domain.Aggregates;
using System;
using System.Linq;

namespace iFood.Domain.Interfaces
{
    public interface IRepository<T> where T : IAggregateRoot
    {
        IQueryable<T> Query(string textSearch = null);
        T GetById(Guid aggregateId);
        void Create(T aggregate);
        void Update(T aggregate);
        void Delete(T aggregate);
    }
}
