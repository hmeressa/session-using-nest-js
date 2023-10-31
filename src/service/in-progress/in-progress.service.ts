import { Delete, Injectable } from '@nestjs/common';
import { InProgressInterface } from '../../interface';
import { InProgressModel, TaskModel } from '../../model';
import { InProgressRepository, TaskRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoService } from '../todo/todo.service';
import { TaskStatusService } from '../task-status/task-status.service';

@Injectable()
export class InProgressService implements InProgressInterface {
  constructor(
    @InjectRepository(InProgressModel)
    private readonly inProgressModelRepository: InProgressRepository,
    @InjectRepository(TaskModel)
    private readonly taskRepository: TaskRepository,
    private readonly todoService: TodoService,
    private readonly taskStatusService: TaskStatusService,
  ) {}

  async createInProgress(todo: any, taskId: any): Promise<any> {
    try {
      const taskStatus = await this.taskStatusService.getStatus('in-progress');
      const inProgress = await this.inProgressModelRepository.create({
        name: todo.name,
        startDate: todo.startDate,
        endDate: todo.endDate,
        todoId: todo.id,
      });
      console.log(todo);

      await this.taskRepository.update(taskId, {
        taskStatusId: taskStatus.id,
      });

      const inP = await this.inProgressModelRepository.save(inProgress);
      console.log(inP);
      const { id, ...todos } = todo;
      console.log(todos);

      return inP;
    } catch (error) {
      throw error;
    }
  }

  async getInProgress(inProgressId: string): Promise<any> {
    return await this.inProgressModelRepository.findOne({
      where: { id: inProgressId },
    });
  }

  async getInProgresses(): Promise<any> {
    return await this.inProgressModelRepository.find();
  }

  async deleteInProgress(id: string): Promise<any> {
    return await this.inProgressModelRepository.delete(id);
  }
}
