import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStatusController } from '../../controller';
import { TaskStatusModel } from '../../model';
import { TaskStatusService } from '../../service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskStatusModel])],
  controllers: [TaskStatusController],
  providers: [TaskStatusService, TaskStatusService],
  exports: [TaskStatusService],
})
export class TaskStatusModule {}
