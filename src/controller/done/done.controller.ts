import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { DoneService, InProgressService, TodoService } from '../../service';
import { sendEmailNotification } from 'src/utils/sendEmailNotification';

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

  @Get(':id')
  async getDone(id: string): Promise<any> {
    const done = await this.doneService.getDone(id);
    if (!done) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Done Not Found',
      });
    }
    return done;
  }

  @Get()
  async getDones(): Promise<any> {
    const dones = await this.doneService.getDones();
    if (!dones) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Done Not Found',
      });
    }
    return dones;
  }
}
