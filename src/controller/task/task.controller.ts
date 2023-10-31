import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  NotFoundException,
  Req,
} from '@nestjs/common';
import {
  ProjectService,
  TaskService,
  TaskStatusService,
  UserService,
} from '../../service';
import { TaskDto, TaskUpdateDto } from '../../dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly taskStatusService: TaskStatusService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async createTask(@Body() taskDto: TaskDto): Promise<any> {
    const isExist = await this.taskService.getTaskByName(taskDto.name);
    if (isExist) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task already exist',
      });
    }
    const taskStatus = await this.taskStatusService.getStatus('back-log');
    taskDto.taskStatus = taskStatus;

    return await this.taskService.createTask(taskDto);
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<any> {
    const task = await this.taskService.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    return task;
  }

  @Get()
  async getTasks(): Promise<any> {
    const task = await this.taskService.getTasks();
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    return await this.taskService.getTasks();
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<any> {
    const task = await this.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    await this.taskService.deleteTask(id);
    return {
      message: 'Task is Deleted',
      status: 'Success',
    };
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() taskUpdateDto: TaskUpdateDto,
  ): Promise<any> {
    const task = await this.getTask(id);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }

    return await this.taskService.updateTask(id, taskUpdateDto);
  }

  @Patch('re-assign-user/:taskId/:userId')
  async reAssignUserToTask(
    @Param('id') taskId: string,
    @Param('id') userId: string,
  ): Promise<any> {
    const task = await this.getTask(taskId);
    if (!task) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }
    const user = await this.userService.getUser(task.userId);

    if (!user) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'User NOT FOUND',
      });
    }
    console.log(task.id, user);

    const userTask = await this.taskService.reAssignTaskToUser(task, user);
    return userTask;
  }

  @Get('get/userTask')
  async getTasksByUserId(@Req() request: any): Promise<any> {
    // console.log('user id', request.body.id);
    const allTasks = await this.getTasks();
    const userTask = await allTasks.filter(
      (task: any) => task.userId === '93cbc612-260d-45da-aeb4-9b574cb81373',
    );
    console.log(allTasks);
    if (!userTask) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Task NOT FOUND',
      });
    }

    return userTask;
  }
}
