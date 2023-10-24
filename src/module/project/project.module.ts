import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModel } from '../../model';
import { ProjectController } from '../../controller';
import { ProjectService } from '../../service';

@Module({
    imports: [TypeOrmModule.forFeature([ ProjectModel ])],
    controllers: [ ProjectController ],
    providers :[ ProjectService ]
})
export class ProjectModule {}
