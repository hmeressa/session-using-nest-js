import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProjectService, TaskService, TaskStatusService } from '../../service';
import { TaskDto, TaskUpdateDto } from '../../dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly taskStatusService: TaskStatusService,
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
}
