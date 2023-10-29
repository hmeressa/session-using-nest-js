import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InProgressController } from '../../controller';
import {
  InProgressModel,
  TaskModel,
  TaskStatusModel,
  TodoModel,
} from '../../model';
import {
  InProgressService,
  TaskService,
  TaskStatusService,
  TodoService,
} from '../../service';
import {
  InProgressRepository,
  TaskStatusRepository,
  TodoRepository,
} from '../../repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InProgressModel,
      TodoModel,
      TaskModel,
      TaskStatusModel,
    ]),
  ],
  controllers: [InProgressController],
  providers: [
    InProgressService,
    InProgressRepository,
    TodoService,
    TodoRepository,
    TaskService,
    TaskStatusService,
    TaskStatusRepository,
  ],
})
export class InProgressModule {}
