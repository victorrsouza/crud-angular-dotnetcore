using System;
using System.Collections.Generic;
using System.Text;

namespace iFood.Domain.Exceptions
{
    public static class ExceptionCodes
    {
        public const string ID_IS_REQUIRED = "O identificador não foi informado";
        public const string NAME_IS_REQUIRED = "O nome não foi informado";
        public const string NAME_MAX_LIMIT = "O nome não pode possuir mais que 256 caracteres";
        public const string VALUE_IS_REQUIRED = "O valor não foi informado";
        public const string VALUE_MAX_LIMIT = "O valor não pode possuir mais que 8 digitos";
    }
}
