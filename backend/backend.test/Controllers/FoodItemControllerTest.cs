using backend.Controllers;
using backend.Services;
using backend.Models.Entities;
using FakeItEasy;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Dtos;

namespace backend.test.Controllers
{
    public class FoodItemControllerTest
    {
        private readonly IFoodItemService _foodItemService;
        private readonly IComponentService _componentService;
        private readonly FoodItemController _foodItemController;

        public FoodItemControllerTest()
        {
            // Criação dos mocks
            _foodItemService = A.Fake<IFoodItemService>();
            _componentService = A.Fake<IComponentService>();

            // Instanciação do controller com os mocks
            _foodItemController = new FoodItemController(_foodItemService, _componentService);
        }
        [Fact]
        public async Task GetFoodItems_ReturnsOkResult_WithPagination()
        {
            // Arrange: Defina o comportamento do mock
            var foodItem1 = new FoodItem
            {
                Code = "001",
                Name = "Food Item 1",
                Group = "Group 1",
                Components = new List<Component>
        {
            new Component
            {
                Id = Guid.NewGuid(),
                Name = "Component 1",
                Unit = "g",
                Value = 50.0,
                FoodItemCode = "001",
                FoodItem = null
            }
        }
            };

            var foodItem2 = new FoodItem
            {
                Code = "002",
                Name = "Food Item 2",
                Group = "Group 2",
                Components = new List<Component>
        {
            new Component
            {
                Id = Guid.NewGuid(),
                Name = "Component 2",
                Unit = "mg",
                Value = 20.0,
                FoodItemCode = "002",
                FoodItem = null
            }
        }
            };

            var items = new List<FoodItem> { foodItem1, foodItem2 };
            var totalItems = 2;
            var totalPages = 1;

            // Configura o mock para retornar os itens com paginação
            A.CallTo(() => _foodItemService.GetFoodItemsAsync(null, 1, 10))
                .Returns(Task.FromResult<(IEnumerable<FoodItem>, int, int)>((items, totalItems, totalPages)));

            // Act: Chama o método do controller
            var result = await _foodItemController.GetFoodItems(null, 1, 10);

            // Assert: Verifica se o resultado é um OkObjectResult
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<PagedFoodItemsResponse>(okResult.Value);

            Console.WriteLine(returnValue);

            
            Assert.Equal(2, returnValue.Pagination.TotalItems);
            Assert.Equal(1, returnValue.Pagination.TotalPages);
            Assert.Equal(1, returnValue.Pagination.CurrentPage); 
            Assert.Equal(10, returnValue.Pagination.PageSize);
        }


        [Fact]
        public async Task GetFoodItemComponents_ReturnsOkResult()
        {
            // Arrange: Defina o comportamento do mock
            var components = new List<Component>
            {
                new Component
                {
                    Id = Guid.NewGuid(),
                    Name = "Component 1",
                    Unit = "g",
                    Value = 50.0,
                    FoodItemCode = "foodItemCode",
                    FoodItem = null
                },
                new Component
                {
                    Id = Guid.NewGuid(),
                    Name = "Component 2",
                    Unit = "mg",
                    Value = 20.0,
                    FoodItemCode = "foodItemCode",
                    FoodItem = null
                }
            };

            // Configura o mock para o serviço de componentes
            A.CallTo(() => _componentService.GetComponentsByFoodItemCodeAsync("foodItemCode"))
                .Returns(Task.FromResult(components as IEnumerable<Component>));

            // Act: Chama o método do controller
            var result = await _foodItemController.GetFoodItemComponents("foodItemCode");

            // Assert: Verifica se o resultado é um OkObjectResult
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<List<Component>>(okResult.Value);
            Assert.Equal(2, returnValue.Count);
            Assert.Equal("Component 1", returnValue[0].Name);
            Assert.Equal("Component 2", returnValue[1].Name);
        }
    }
}
