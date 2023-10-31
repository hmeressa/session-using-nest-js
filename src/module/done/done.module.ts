import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoneController } from '../../controller';
import {
  DoneModel,
  InProgressModel,
  TaskModel,
  TaskStatusModel,
  TodoModel,
  UserModel,
} from '../../model';
import {
  DoneService,
  InProgressService,
  TaskService,
  TaskStatusService,
  TodoService,
  UserService,
} from '../../service';
import { DoneRepository, InProgressRepository } from '../../repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoneModel,
      TaskStatusModel,
      TaskModel,
      InProgressModel,
      TodoModel,
      InProgressModel,
      UserModel,
    ]),
  ],
  controllers: [DoneController],
  providers: [
    DoneService,
    DoneRepository,
    TaskStatusService,
    TaskService,
    InProgressService,
    TodoService,
    InProgressService,
    InProgressRepository,
    UserService,
  ],
})
export class DoneModule {}
