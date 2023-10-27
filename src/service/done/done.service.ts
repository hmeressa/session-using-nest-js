import { Injectable } from '@nestjs/common';
import { DoneDto } from '../../dto';
import { DoneInterface } from '../../interface';
import { DoneModel, TaskModel } from '../../model';
import { DoneRepository, TaskRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatusService } from '../task-status/task-status.service';

@Injectable()
export class DoneService implements DoneInterface {
  constructor(
    @InjectRepository(DoneModel)
    private readonly doneRepository: DoneRepository,
    private readonly taskStatusService: TaskStatusService,
    @InjectRepository(TaskModel)
    private readonly taskRepository: TaskRepository,
  ) {}
  async createDone(inProgress: any, taskId: any): Promise<any> {
    const taskStatus = await this.taskStatusService.getStatus('done');
    const todo = await this.doneRepository.create({
      name: inProgress.name,
      startDate: inProgress.startDate,
      endDate: inProgress.endDate,
      inProgressId: inProgress.id,
    });

    await this.taskRepository.update(taskId, {
      taskStatusId: taskStatus.id,
    });

    return await this.doneRepository.save(todo);
  }
  getDone(inProgressId: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getDones(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
