import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionModel } from '../../model';
import { PermissionService } from '../../service';
import { PermissionController} from '../../controller';
import { PermissionRepository } from '../../repository';
@Module({
    imports: [ TypeOrmModule.forFeature([ PermissionModel ]) ],
    controllers: [ PermissionController ],
    providers : [ PermissionService, PermissionRepository ]
})
export class PermissionModule {}
