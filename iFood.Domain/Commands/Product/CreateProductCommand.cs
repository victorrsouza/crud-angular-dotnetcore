using iFood.Domain.Exceptions;
using iFood.Domain.Extensions;
using System;

namespace iFood.Domain.Commands
{
    public class CreateProductCommand : ICommand
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public decimal Value { get; set; }

        public string Image { get; set; }

        public CommandValidation Validate()
        {
            var validation = new CommandValidation(this);

            if (Id.Equals(Guid.Empty))
            {
                validation.Add(ExceptionCodes.ID_IS_REQUIRED);
            }

            if (string.IsNullOrWhiteSpace(Name))
            {
                validation.Add(ExceptionCodes.NAME_IS_REQUIRED);
            }

            if (Name.Length > 256)
            {
                validation.Add(ExceptionCodes.NAME_MAX_LIMIT);
            }

            if (Value.Equals(0))
            {
                validation.Add(ExceptionCodes.VALUE_IS_REQUIRED);
            }

            if (Value.Lenght() > 8)
            {
                validation.Add(ExceptionCodes.VALUE_MAX_LIMIT);
            }

            return validation;
        }
    }
}
