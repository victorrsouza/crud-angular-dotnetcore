using AutoFixture;
using FluentAssertions;
using iFood.Domain.Aggregates;
using iFood.Tests.Configuration;
using System;
using NUnit.Framework;

namespace iFood.Tests.UnitTests.Aggregates
{
    public class ProductTests : BaseTest
    {
        private Product _sut;

        [Test]
        public void Create_product_aggregate_should_flow()
        {
            // Given
            var id = Fixture.Create<Guid>();
            var name = Fixture.Create<string>();
            var value = Fixture.Create<decimal>();
            var image = Fixture.Create<string>();

            // When
            _sut = new Product(id, name, value, image);

            // Then
            _sut.Id.Should().Be(id);
            _sut.Name.Should().Be(name);
            _sut.Value.Should().Be(value);
            _sut.Image.Should().Be(image);
        }

        [Test]
        public void Update_product_aggregate_should_flow()
        {
            // Given
            _sut = Fixture.Create<Product>();

            var name = Fixture.Create<string>();
            var value = Fixture.Create<decimal>();
            var image = Fixture.Create<string>();

            // When
            _sut.Update(name, value, image);

            // Then
            _sut.Name.Should().Be(name);
            _sut.Value.Should().Be(value);
            _sut.Image.Should().Be(image);
        }
    }
}
