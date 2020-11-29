using AutoFixture;
using FluentAssertions;
using iFood.Domain.Commands;
using iFood.Domain.Exceptions;
using iFood.Tests.Configuration;
using NUnit.Framework;
using System;
using System.Linq;

namespace iFood.Tests.UnitTests.Commands
{
    public class DeleteProductCommandTests : BaseTest
    {
        private DeleteProductCommand _sut;

        [SetUp]
        public void Setup()
        {
            _sut = Fixture.Create<DeleteProductCommand>();
        }

        [Test]
        public void Delete_product_command_id_is_required()
        {
            // Given
            _sut.Id = Guid.Empty;

            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().BeTrue();
            validation.Errors.First().Should().Be(ExceptionCodes.ID_IS_REQUIRED);
        }

        [Test]
        public void Delete_product_command_should_flow()
        {
            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().BeFalse();
        }
    }
}
