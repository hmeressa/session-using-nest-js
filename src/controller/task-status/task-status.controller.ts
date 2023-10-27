import { Controller, Get, Body,Delete, NotFoundException, Param, Post } from '@nestjs/common';
import { TaskStatusDto } from '../../dto';
import { TaskStatusService } from '../../service';

@Controller("task-status")
export class TaskStatusController {
  constructor(
    private readonly taskStatusService: TaskStatusService) { }
  
  @Post()
  async createTaskStatus(@Body() taskStatusDto: TaskStatusDto): Promise<Object> {
      return await this.taskStatusService.createTaskStatus(taskStatusDto);
  }

  @Get(":id")
  async getTaskStatus(@Param("id") id: string): Promise<Object> {
        const taskStatus = await this.taskStatusService.getTaskStatus(id);
        if (!taskStatus) {
           return new NotFoundException({
                message : "Something bad happened",
                error: "Task Status NOT FOUND",
            })  
        }
        return taskStatus;
  }
    
  @Get()
  async getTaskStatusses(): Promise<Object> {
     return await this.taskStatusService.getTaskStatusses()
  }

  @Delete(":id")
  async deleteTaskStatus(@Param("id") id : string): Promise<Object> {
     return await this.taskStatusService.deleteTaskStatus(id)
  }
}
