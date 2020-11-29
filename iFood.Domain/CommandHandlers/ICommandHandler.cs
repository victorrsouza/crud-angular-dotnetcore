using iFood.Domain.Commands;

namespace iFood.Domain.CommandHandlers
{
    public interface ICommandHandler<T> where T : ICommand
    {
        void Handle(T command);
    }
}
