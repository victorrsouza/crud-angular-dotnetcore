using System.Collections.Generic;

namespace iFood.Application.ReadModels
{
    public class SearchResult<T> where T : IReadModel
    {
        public IEnumerable<T> Data { get; set; }
        public int Total { get; set; }
        public bool HasMore { get; set; }
    }
}
