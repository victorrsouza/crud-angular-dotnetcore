using AutoFixture;

namespace iFood.Tests.Core.Configuration
{
    public static class CommonConfiguration
    {
        public static Fixture CreateFixture()
        {
            var fixture = new Fixture();
            fixture.Behaviors.Clear();
            fixture.Behaviors.Add(new NullRecursionBehavior());
            fixture.Customize(new RegisterBuilders());

            return fixture;
        }
    }
}
