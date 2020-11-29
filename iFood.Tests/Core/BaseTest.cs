using AutoFixture;
using iFood.Tests.Core.Configuration;
using NUnit.Framework;

namespace iFood.Tests.Configuration
{
    public class BaseTest
    {
        public Fixture Fixture { get; set; }

        public BaseTest()
        {
            Fixture = CommonConfiguration.CreateFixture();
            //Container = new WebHostBuilder().UseStartup<StartupTest>().Build().Services;
        }
    }
}