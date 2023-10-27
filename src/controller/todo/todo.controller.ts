import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService, TodoService, UserService } from '../../service';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly taskService: TaskService,
    private readonly userService: UserService,
  ) {}
  @Post(':taskId/assignTo/:usersId')
  async assignTaskToUser(
    @Param('taskId') taskId: string,
    @Param('usersId') usersId: string,
  ): Promise<any> {
    const task = await this.taskService.getTask(taskId);
    const { projectId, userId, taskStatusId, project, ...tasks } = task;
    const user = await this.userService.getUser(usersId);

    if (!tasks || !user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task User Not Found',
      });
    }
    const todo = await this.todoService.createTodo(tasks, usersId);
    if (!todo) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Unable to create todo',
      });
    }
    return {
      status: 'Success',
      data: todo,
    };
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<any> {
    return this.todoService.getTodo(id);
  }

  @Get()
  async getTodos(): Promise<any> {
    return this.todoService.getTodos();
  }
}
