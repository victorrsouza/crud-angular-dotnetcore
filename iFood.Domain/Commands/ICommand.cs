namespace iFood.Domain.Commands
{
    public interface ICommand
    {
        CommandValidation Validate();
    }
}
