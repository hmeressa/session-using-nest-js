import { Injectable } from '@nestjs/common';
import { TaskStatusDto } from '../../dto';
import { TaskStatusRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatusModel } from '../../model';
import { TaskStatusInterface } from '../../interface';

@Injectable()
export class TaskStatusService implements TaskStatusInterface {
  constructor(
    @InjectRepository(TaskStatusModel)
    private readonly taskStatusRepository: TaskStatusRepository,
  ) {}

  async createTaskStatus(taskStatusDto: TaskStatusDto): Promise<Object> {
    const task = await this.taskStatusRepository.create(taskStatusDto);
    return await this.taskStatusRepository.save(task);
  }

  async getTaskStatus(id: string): Promise<Object> {
    return await this.taskStatusRepository.findOne({ where: {} });
  }

  async getTaskStatusses(): Promise<Object> {
    return await this.taskStatusRepository.find();
  }
  async deleteTaskStatus(id: string): Promise<Object> {
    return await this.taskStatusRepository.delete(id);
  }

  async getStatus(status: string): Promise<any> {
    return await this.taskStatusRepository.findOne({
      where: { status: status },
    });
  }
}
