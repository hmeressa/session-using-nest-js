import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskModel, TodoModel } from '../../model';
import { TodoInterface } from '../../interface';
import { TaskRepository, TodoRepository } from '../../repository';
import { TaskService } from '../task/task.service';
import { TaskStatusService } from '../task-status/task-status.service';

@Injectable()
export class TodoService implements TodoInterface {
  constructor(
    @InjectRepository(TodoModel)
    private readonly todoRepository: TodoRepository,
    @InjectRepository(TaskModel)
    private readonly taskRepository: TaskRepository,
    private readonly taskStatusService: TaskStatusService,
  ) {}

  async createTodo(task: any, userId: any): Promise<any> {
    const taskStatus = await this.taskStatusService.getStatus('to-do');
    const todo = await this.todoRepository.create({
      name: task.name,
      startDate: task.startDate,
      endDate: task.endDate,
      taskId: task.id,
    });

    await this.taskRepository.update(task.id, {
      userId: userId,
      taskStatusId: taskStatus.id,
    });

    return await this.todoRepository.save(todo);
  }
  async getTodo(id: string): Promise<any> {
    return this.todoRepository.findOne({
      where: { id: id },
    });
  }

  async getTodos(): Promise<any> {
    return this.todoRepository.find();
  }

  async deleteTodo(id: string): Promise<any> {
    return await this.todoRepository.delete(id);
  }
}
