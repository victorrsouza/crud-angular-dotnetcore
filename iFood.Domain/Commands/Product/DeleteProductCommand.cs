using iFood.Domain.Exceptions;
using System;

namespace iFood.Domain.Commands
{
    public class DeleteProductCommand : ICommand
    {
        public Guid Id { get; set; }

        public DeleteProductCommand(Guid id)
        {
            Id = id;
        }

        public CommandValidation Validate()
        {
            var validation = new CommandValidation(this);

            if (Id.Equals(Guid.Empty))
            {
                validation.Add(ExceptionCodes.ID_IS_REQUIRED);
            }

            return validation;
        }
    }
}
