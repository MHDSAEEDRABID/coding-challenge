using coding_challenge.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace coding_challenge.Controllers
{
    [Route("tasks")]
    [ApiController]
    public class Challenge(MockTaskService taskService) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(taskService.GetAllTasks());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        { 
            return Ok(taskService.GetTaskById(id));
        }

        // note : no need to add DTOs because it's mock task service
        [HttpPost]
        public IActionResult Create([FromBody]Models.Task task)
        {
            return Ok(taskService.CreateTask(task.Title, task.Description, task.DueDate));
        }
        [HttpPut]
        public IActionResult Update(Models.Task task)
        {
            var result = taskService.UpdateTask(task.Id, task.Title, task.Description, task.IsCompleted, task.DueDate);
            if (result is null)
                return NotFound();
            return Ok(result);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!taskService.DeleteTask(id))
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
