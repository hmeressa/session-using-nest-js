import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from '../../controller';
import {
  ProjectModel,
  TaskModel,
  TaskStatusModel,
  UserModel,
} from '../../model';
import {
  ProjectService,
  TaskService,
  TaskStatusService,
  UserService,
} from '../../service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaskModel,
      TaskStatusModel,
      ProjectModel,
      UserModel,
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskStatusService, ProjectService, UserService],
  exports: [],
})
export class TaskModule {}
