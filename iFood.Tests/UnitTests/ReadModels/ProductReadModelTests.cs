using AutoFixture;
using FluentAssertions;
using iFood.Application.ReadModels;
using iFood.Domain.Aggregates;
using iFood.Tests.Configuration;
using NUnit.Framework;

namespace iFood.Tests.UnitTests.ReadModels
{
    public class ProductReadModelTests : BaseTest
    {
        private ProductReadModel _sut;

        [Test]
        public void Create_product_aggregate_should_flow()
        {
            // Given
            var aggregate = Fixture.Create<Product>();

            // When
            _sut = ProductReadModel.Create(aggregate);

            // Then
            _sut.Id.Should().Be(aggregate.Id);
            _sut.Name.Should().Be(aggregate.Name);
            _sut.Value.Should().Be(aggregate.Value);
            _sut.Image.Should().Be(aggregate.Image);
        }
    }
}
