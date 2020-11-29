using iFood.Domain.Commands;

namespace iFood.Domain.CommandHandlers
{
    public interface IProductCommandHandler : ICommandHandler<CreateProductCommand>,
                                              ICommandHandler<UpdateProductCommand>,
                                              ICommandHandler<DeleteProductCommand>
    { }
}
