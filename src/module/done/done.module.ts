import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoneController } from '../../controller';
import {
  DoneModel,
  InProgressModel,
  TaskModel,
  TaskStatusModel,
  TodoModel,
} from '../../model';
import {
  DoneService,
  InProgressService,
  TaskService,
  TaskStatusService,
  TodoService,
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
  ],
})
export class DoneModule {}
