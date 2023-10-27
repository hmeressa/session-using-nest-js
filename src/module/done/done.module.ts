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
import { DoneRepository } from '../../repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoneModel,
      TaskStatusModel,
      TaskModel,
      InProgressModel,
      TodoModel,
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
  ],
})
export class DoneModule {}
