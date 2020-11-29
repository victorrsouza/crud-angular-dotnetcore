using System.Text.RegularExpressions;

namespace iFood.Domain.Extensions
{
    public static class PrimitiveExtensions
    {
        public static int Lenght(this decimal attribute)
        {
            var attrStr = attribute.ToString();

            if (!attrStr.Contains("."))
            {
                attrStr += ".00";
            }

            return Regex.Replace(attrStr, @"[^\d]", "").Length;
        }
    }
}
