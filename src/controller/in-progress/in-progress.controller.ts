import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { InProgressService, TaskService, TodoService } from '../../service';

@Controller('in-progress')
export class InProgressController {
  constructor(
    private readonly inProgressService: InProgressService,
    private readonly todoService: TodoService,
    private readonly taskService: TaskService,
  ) {}

  @Post(':id')
  async transferTodoTaskToInProgressTasks(
    @Param('id') id: string,
  ): Promise<any> {
    const todo = await this.todoService.getTaskIdFromTodo(id);
    console.log('task id', todo.id);
    const { taskId, ...todos } = todo;
    if (!todos) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Todo Not Found',
      });
    }

    const inProgress = await this.inProgressService.createInProgress(
      todos,
      taskId,
    );

    if (!inProgress) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Unable to transfer to inprogress',
      });
    }
    return {
      status: 'Success',
      data: await this.taskService.getTask(todo.taskId),
    };
  }

  @Get(':id')
  async getInProgress(id: string): Promise<any> {
    const inProgress = await this.inProgressService.getInProgress(id);
    if (!inProgress) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'InProgress Not Found',
      });
    }
    return inProgress;
  }
  @Get()
  async getInProgresses(id: string): Promise<any> {
    const inProgresses = await this.inProgressService.getInProgresses();
    if (!inProgresses) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'InProgress Not Found',
      });
    }
    return inProgresses;
  }
}
