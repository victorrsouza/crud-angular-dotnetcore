using iFood.Application.ReadModels;
using iFood.Domain.CommandHandlers;
using iFood.Domain.Commands;
using iFood.Domain.Interfaces;
using iFood.Infrastructure.Extensions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace iFood.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase {

        private readonly IProductCommandHandler _commandHandler;
        private readonly IProductRepository _repository;

        public ProductController(IProductCommandHandler commandHandler,
                                 IProductRepository repository)
        {
            _commandHandler = commandHandler;
            _repository = repository;
        }

        /// <summary>
        /// Endpoint que retorna todos os produtos cadastrados
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Retrieve(string textSearch, int page = 0, int limit = 6)
        {            
            var data = _repository
                .Query(textSearch)
                .Paginate(page, limit)
                .OrderBy(x => x.Name)
                .Select(ProductReadModel.Create);

            var total = _repository.Query().Count();

            return Ok(new SearchResult<ProductReadModel>
            { 
                Data = data,
                Total = total,
                HasMore = total - ((page + 1) * limit) > 0
            });
        }

        /// <summary>
        /// Endpoint para inclusão de um novo produto
        /// </summary>
        /// <param name="command">Comando de criação</param>
        /// <returns></returns>
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Create(CreateProductCommand command)
        {
            var validation = command.Validate();
            if (validation.HasErrors)
            {
                return BadRequest(validation.ConvertToJson());
            }

            _commandHandler.Handle(command);
            return Ok();
        }

        /// <summary>
        /// Endpoint para alteração de um produto existente
        /// </summary>
        /// <param name="command">Comando de alteração</param>
        /// <returns></returns>
        [HttpPut, DisableRequestSizeLimit]
        public IActionResult Update(UpdateProductCommand command)
        {
            var validation = command.Validate();
            if (validation.HasErrors)
            {
                return BadRequest(validation.ConvertToJson());
            }

            _commandHandler.Handle(command);
            return Ok();
        }

        /// <summary>
        /// Endpoint para exclusão de um produto
        /// </summary>
        /// <param name="id">Identificador do produto</param>
        /// <returns></returns>
        [HttpDelete, Route("{id}")]
        public IActionResult Delete(Guid id)
        {
            var command = new DeleteProductCommand(id);

            var validation = command.Validate();
            if (validation.HasErrors)
            {
                return BadRequest(validation.ConvertToJson());
            }

            _commandHandler.Handle(command);
            return Ok();
        }
    }
}
