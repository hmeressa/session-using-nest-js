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
  InProgressModelRepository,
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
    InProgressModelRepository,
    TodoService,
    TodoRepository,
    TaskService,
    TaskStatusService,
    TaskStatusRepository,
  ],
})
export class InProgressModule {}
