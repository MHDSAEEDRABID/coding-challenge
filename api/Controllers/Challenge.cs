using coding_challenge.Services;

using Microsoft.AspNetCore.Mvc;

namespace coding_challenge.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class Challenge(MockTaskService taskService) : ControllerBase
    {

    }
}
