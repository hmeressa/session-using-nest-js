import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { TaskService, TodoService, UserService } from '../../service';
import { sendEmailNotification } from 'src/utils/sendEmailNotification';

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
    @Req() request: Request,
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
    await sendEmailNotification(
      (request.body as any).id,
      (user as any).email.email,
      'Task Notification',
      'You are assigned a task',
      '',
    );
    return {
      status: 'Success',
      data: task,
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

  @Delete(':id')
  async unAssignedTask(@Param('id') id: string): Promise<any> {
    const task = await this.taskService.getTask(id);
    console.log(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task Not Found',
      });
    }
    await this.todoService.unAssignedTask(task.id);
    return {
      message: 'Task is Successfully unassigned',
    };
  }
}
