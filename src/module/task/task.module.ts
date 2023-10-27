import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from '../../controller';
import { ProjectModel, TaskModel, TaskStatusModel } from '../../model';
import { ProjectService, TaskService, TaskStatusService } from '../../service';

@Module({
    imports: [ TypeOrmModule.forFeature([ TaskModel, TaskStatusModel, ProjectModel ])],
    controllers: [ TaskController ],
    providers: [ TaskService, TaskStatusService,ProjectService ],
    exports: [ ]
})
export class TaskModule {}
