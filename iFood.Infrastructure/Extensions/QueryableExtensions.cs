using iFood.Domain.Aggregates;
using System.Linq;

namespace iFood.Infrastructure.Extensions
{
    public static class QueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> query, int page, int limit) where T : IAggregateRoot
            => query.Skip(page * limit).Take(limit);
        
    }
}
