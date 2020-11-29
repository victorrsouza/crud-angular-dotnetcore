using iFood.Domain.Aggregates;
using iFood.Domain.Interfaces;
using iFood.Infrastructure.Context;
using System;
using System.Linq;

namespace iFood.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _dataContext;

        public ProductRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IQueryable<Product> Query(string textSearch = null)
        {
            var query = _dataContext.Products.AsQueryable();

            if (!string.IsNullOrWhiteSpace(textSearch))
            {
                query = query.Where(x => x.Name.ToLower().Contains(textSearch.ToLower()));
            }

            return query;
        }

        public Product GetById(Guid aggregateId)
        {
            return _dataContext.Products.Find(aggregateId);
        }

        public void Create(Product aggregate)
        {
            _dataContext.Products.Add(aggregate);
            _dataContext.SaveChanges();
        }

        public void Update(Product aggregate)
        {
            _dataContext.Products.Update(aggregate);
            _dataContext.SaveChanges();
        }

        public void Delete(Product aggregate)
        {
            _dataContext.Products.Remove(aggregate);
            _dataContext.SaveChanges();
        }
    }
}
