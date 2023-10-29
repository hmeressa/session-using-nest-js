import { Injectable } from '@nestjs/common';
import { TaskDto, TaskUpdateDto } from 'src/dto';
import { TaskInterface } from '../../interface';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskModel } from '../../model';
import { TaskRepository } from '../../repository';

@Injectable()
export class TaskService implements TaskInterface {
  constructor(
    @InjectRepository(TaskModel)
    private readonly taskRepository: TaskRepository,
  ) {}

  async createTask(taskDto: TaskDto): Promise<TaskModel> {
    const task = await this.taskRepository.create(taskDto);
    return await this.taskRepository.save(task);
  }

  async getTask(id: string): Promise<any> {
    return await this.taskRepository.findOne({
      where: { id: id },
      relations: ['project'],
    });
  }

  async getTasks(): Promise<any> {
    return await this.taskRepository.find({
      relations: ['user', 'project', 'taskStatus'],
    });
  }

  async getTaskByName(name: string): Promise<any> {
    return await this.taskRepository.findOne({ where: { name: name } });
  }

  async deleteTask(id: string): Promise<any> {
    return await this.taskRepository.delete(id);
  }

  async updateTask(id: string, taskDto: TaskUpdateDto): Promise<any> {
    return await this.taskRepository.update(id, taskDto);
  }

  async assignTaskToUser(id: string, taskDto: TaskUpdateDto): Promise<any> {
    return await this.taskRepository.update(id, taskDto);
  }
}
