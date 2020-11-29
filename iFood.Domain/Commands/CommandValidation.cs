using Newtonsoft.Json;
using System.Collections.Generic;

namespace iFood.Domain.Commands
{
    public class CommandValidation
    {
        private readonly List<string> _errors;

        public CommandValidation(ICommand command)
        {
            Command = command;
            _errors = new List<string>();
        }

        public ICommand Command { get; }

        public bool HasErrors => _errors.Count > 0;

        public IReadOnlyCollection<string> Errors => _errors;

        public void Add(string error)
        {
            _errors.Add(error);
        }

        public string ConvertToJson()
        {
            return JsonConvert.SerializeObject(_errors);
        }
    }
}
