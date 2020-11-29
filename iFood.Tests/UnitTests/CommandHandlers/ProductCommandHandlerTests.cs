using AutoFixture;
using iFood.Domain.Aggregates;
using iFood.Domain.CommandHandlers;
using iFood.Domain.Commands;
using iFood.Domain.Interfaces;
using iFood.Tests.Configuration;
using NSubstitute;
using NUnit.Framework;

namespace iFood.Tests.UnitTests.CommandHandlers
{
    public class ProductCommandHandlerTests : BaseTest
    {
        private IProductRepository _repository;

        private ProductCommandHandler _sut;

        [SetUp]
        public void Setup()
        {
            _repository = Substitute.For<IProductRepository>();

            _sut = new ProductCommandHandler(_repository);
        }

        [Test]
        public void Handle_create_command_should_flow()
        {
            // Given
            var command = Fixture.Create<CreateProductCommand>();

            // When
            _sut.Handle(command);

            // Then
            _repository.Received(1).Create(Arg.Is<Product>(x =>
                x.Id == command.Id &&
                x.Name == command.Name &&
                x.Value == command.Value &&
                x.Image == command.Image
            ));
        }

        [Test]
        public void Handle_update_command_should_flow()
        {
            // Given
            var command = Fixture.Create<UpdateProductCommand>();
            var aggregate = Fixture.Create<Product>();

            _repository.GetById(command.Id).Returns(aggregate);

            // When
            _sut.Handle(command);

            // Then
            _repository.Received(1).GetById(command.Id);
            _repository.Received(1).Update(Arg.Is<Product>(x =>
                x.Name == command.Name &&
                x.Value == command.Value &&
                x.Image == command.Image
            ));
        }

        [Test]
        public void Handle_delete_command_should_flow()
        {
            // Given
            var command = Fixture.Create<DeleteProductCommand>();
            var aggregate = Fixture.Create<Product>();

            _repository.GetById(command.Id).Returns(aggregate);

            // When
            _sut.Handle(command);

            // Then
            _repository.Received(1).GetById(command.Id);
            _repository.Received(1).Delete(Arg.Is<Product>(x =>
                x.Name == aggregate.Name &&
                x.Value == aggregate.Value &&
                x.Image == aggregate.Image
            ));
        }
    }
}
