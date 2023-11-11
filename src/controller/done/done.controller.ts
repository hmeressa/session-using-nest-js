import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import {
  DoneService,
  InProgressService,
  TaskService,
  TodoService,
  UserService,
} from '../../service';
import { sendEmailNotification } from 'src/utils/sendEmailNotification';
// import { sendEmailNotification } from 'src/utils/sendEmailNotification';
import { Request } from 'express'; // Import Request from the 'express' module

@Controller('done')
export class DoneController {
  constructor(
    private readonly doneService: DoneService,
    private readonly TodoService: TodoService,
    private readonly inProgressService: InProgressService,
    private readonly UserService: UserService,
    private readonly taskService: TaskService,
  ) {}

  @Post(':id')
  async transferInProgressTaskToDoneTasks(
    @Param('id') id: string,
    @Req() request: Request,
  ): Promise<any> {
    const todo = await this.TodoService.getTaskIdFromTodo(id);
    const inProgress =
      await this.inProgressService.getInProgressIdFromInprogress(todo.id);
    const users = await this.UserService.getUsers();
    const admins = users.filter((admin: any) => admin.role.name === 'Admin');
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

    // await sendEmailNotification(
    //   (request.body as any).id,
    //   (users as any).email.email,
    //   'Task Notification',
    //   'You are assigned a task',
    //   '',
    // );
    return {
      status: 'Success',
      data: await this.taskService.getTask(todo.taskId),
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
