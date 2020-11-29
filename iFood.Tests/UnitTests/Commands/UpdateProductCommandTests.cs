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
    public class UpdateProductCommandTests : BaseTest
    {
        private UpdateProductCommand _sut;

        [SetUp]
        public void Setup()
        {
            _sut = Fixture.Create<UpdateProductCommand>();
        }

        [Test]
        public void update_product_command_id_is_required()
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
        public void update_product_command_name_is_required()
        {
            // Given
            _sut.Name = string.Empty;

            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().BeTrue();
            validation.Errors.First().Should().Be(ExceptionCodes.NAME_IS_REQUIRED);
        }

        [Test]
        public void update_product_command_value_is_required()
        {
            // Given
            _sut.Value = 0;

            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().BeTrue();
            validation.Errors.First().Should().Be(ExceptionCodes.VALUE_IS_REQUIRED);
        }

        [TestCase(false, 255)]
        [TestCase(false, 256)]
        [TestCase(true, 257)]
        public void update_product_command_name_max_limit(bool expectedResult, int stringLenght)
        {
            // Given
            _sut.Name = new string('*', stringLenght);

            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().Be(expectedResult);
            if (expectedResult)
            {
                validation.Errors.First().Should().Be(ExceptionCodes.NAME_MAX_LIMIT);
            }
        }

        [TestCase(false, 999999.99)]
        [TestCase(false, 999999.00)]
        [TestCase(true, 1000000.99)]
        [TestCase(true, 1000000.00)]
        public void update_product_command_value_max_limit(bool expectedResult, decimal value)
        {
            // Given
            _sut.Value = value;

            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().Be(expectedResult);
            if (expectedResult)
            {
                validation.Errors.First().Should().Be(ExceptionCodes.VALUE_MAX_LIMIT);
            }
        }

        [Test]
        public void update_product_command_should_flow()
        {
            // When
            var validation = _sut.Validate();

            // Then
            validation.HasErrors.Should().BeFalse();
        }
    }
}
