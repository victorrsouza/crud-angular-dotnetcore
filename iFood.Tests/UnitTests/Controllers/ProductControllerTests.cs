using AutoFixture;
using FluentAssertions;
using iFood.Controllers;
using iFood.Domain.Aggregates;
using iFood.Domain.CommandHandlers;
using iFood.Domain.Commands;
using iFood.Domain.Interfaces;
using iFood.Tests.Configuration;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Linq;

namespace iFood.Tests.UnitTests.Controllers
{
    public class ProductControllerTests : BaseTest
    {
        private IProductRepository _repository;
        private IProductCommandHandler _commandHandler;

        private ProductController _sut;

        [SetUp]
        public void Setup()
        {
            _commandHandler = Substitute.For<IProductCommandHandler>();
            _repository = Substitute.For<IProductRepository>();
            
            _sut = new ProductController(_commandHandler, _repository);
        }

        [Test]
        public void Retrieve_endpoint_should_flow()
        {
            // Given
            var products = Fixture.CreateMany<Product>();

            _repository.Query(string.Empty).Returns(products.AsQueryable());

            // When
            var result = _sut.Retrieve(string.Empty) as OkObjectResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(200);
            _repository.Received(1).Query(string.Empty);
        }

        [Test]
        public void Create_endpoint_should_flow()
        {
            // Given
            var command = Fixture.Create<CreateProductCommand>();

            // When
            var result = _sut.Create(command) as OkResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(200);
            _commandHandler.Received(1).Handle(command);
        }

        [Test]
        public void Create_endpoint_invalid()
        {
            // Given
            var command = Fixture.Create<CreateProductCommand>();
            command.Id = Guid.Empty;

            // When
            var result = _sut.Create(command) as BadRequestObjectResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(400);
        }

        [Test]
        public void Update_endpoint_should_flow()
        {
            // Given
            var command = Fixture.Create<UpdateProductCommand>();

            // When
            var result = _sut.Update(command) as OkResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(200);
            _commandHandler.Received(1).Handle(command);
        }

        [Test]
        public void Update_endpoint_invalid()
        {
            // Given
            var command = Fixture.Create<UpdateProductCommand>();
            command.Id = Guid.Empty;

            // When
            var result = _sut.Update(command) as BadRequestObjectResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(400);
        }

        [Test]
        public void Delete_endpoint_should_flow()
        {
            // Given
            var id = Fixture.Create<Guid>();

            // When
            var result = _sut.Delete(id) as OkResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(200);
            _commandHandler.Received(1).Handle(Arg.Is<DeleteProductCommand>(x => x.Id == id));
        }

        [Test]
        public void Delete_endpoint_invalid()
        {
            // Given
            var id = Guid.Empty;

            // When
            var result = _sut.Delete(id) as BadRequestObjectResult;

            // Then
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(400);
        }
    }
}
