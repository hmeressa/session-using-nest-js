import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { InProgressService, TodoService } from '../../service';

@Controller('in-progress')
export class InProgressController {
  constructor(
    private readonly inProgressService: InProgressService,
    private readonly todoService: TodoService,
  ) {}

  @Post(':id')
  async transferTodoTaskToInProgressTasks(
    @Param('id') id: string,
  ): Promise<any> {
    const todo = await this.todoService.getTodo(id);
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
      data: inProgress,
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
