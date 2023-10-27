import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DoneService, InProgressService, TodoService } from '../../service';

@Controller('done')
export class DoneController {
  constructor(
    private readonly doneService: DoneService,
    private readonly TodoService: TodoService,
    private readonly inProgressService: InProgressService,
  ) {}

  @Post(':id')
  async transferInProgressTaskToDoneTasks(
    @Param('id') id: string,
  ): Promise<any> {
    const inProgress = await this.inProgressService.getInProgress(id);
    const todo = await this.TodoService.getTodo(inProgress.todoId);
    if (!inProgress) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Todo Not Found',
      });
    }
    const done = await this.doneService.createDone(inProgress, todo.taskId);

    if (!done) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Unable to transfer to inprogress',
      });
    }
    return {
      status: 'Success',
      data: done,
    };
  }
}
