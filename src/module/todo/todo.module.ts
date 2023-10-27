import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from 'src/controller';
import { TaskModel, TaskStatusModel, TodoModel, UserModel } from 'src/model';
import { TaskRepository, TodoRepository } from 'src/repository';
import {
  TaskService,
  TaskStatusService,
  TodoService,
  UserService,
} from '../../service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TodoModel,
      TaskModel,
      UserModel,
      TaskStatusModel,
    ]),
  ],
  controllers: [TodoController],
  providers: [
    TodoService,
    TodoRepository,
    TaskService,
    UserService,
    TaskRepository,
    TaskStatusService,
  ],
})
export class TodoModule {}
