﻿using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodItemController : ControllerBase
    {
        private readonly IFoodItemService _foodItemService;
        private readonly IComponentService _componentService;

        public FoodItemController(IFoodItemService foodItemService, IComponentService componentService)
        {
            _foodItemService = foodItemService;
            _componentService = componentService;
        }

        // Rota para retornar os FoodItems com paginação e filtro por nome
        [HttpGet]
        public async Task<IActionResult> GetFoodItems([FromQuery] string? search, [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var result = await _foodItemService.GetFoodItemsAsync(search, page, pageSize);
            return Ok(result);
        }

        // Rota para retornar os componentes de um FoodItem específico
        [HttpGet("{code}/components")]
        public async Task<IActionResult> GetFoodItemComponents(string code)
        {
            var components = await _componentService.GetComponentsByFoodItemCodeAsync(code);
            return Ok(components);
        }
    }
}
