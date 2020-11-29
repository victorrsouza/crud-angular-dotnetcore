using iFood.Domain.Commands;
using iFood.Domain.Aggregates;
using iFood.Domain.Interfaces;

namespace iFood.Domain.CommandHandlers
{
    public class ProductCommandHandler : IProductCommandHandler
    {
        private readonly IProductRepository _repository;

        public ProductCommandHandler(IProductRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Trata comando de criação do produto
        /// </summary>
        /// <param name="command">Comando de criação</param>
        public void Handle(CreateProductCommand command)
        {
            var aggregate = new Product(command.Id, command.Name, command.Value, command.Image);
            _repository.Create(aggregate);
        }

        /// <summary>
        /// Trata comando de alteração do produto
        /// </summary>
        /// <param name="command">Comando de alteração</param>
        public void Handle(UpdateProductCommand command)
        {
            var aggregate = _repository.GetById(command.Id);
            aggregate.Update(command.Name, command.Value, command.Image);
            _repository.Update(aggregate);
        }

        /// <summary>
        /// Trata comando de exclusão do produto
        /// </summary>
        /// <param name="command">Comando de exclusão</param>
        public void Handle(DeleteProductCommand command)
        {
            var aggregate = _repository.GetById(command.Id);

            if (aggregate != null)
            {
                _repository.Delete(aggregate);
            }
        }
    }
}
