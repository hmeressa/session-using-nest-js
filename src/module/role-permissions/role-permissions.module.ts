import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissionController } from '../../controller';
import { PermissionModel, RoleModel, RolePermissionModel } from '../../model';
import { PermissionService, RolePermissionService, RoleService } from '../../service';

@Module({
    imports: [ TypeOrmModule.forFeature([RolePermissionModel, RoleModel, PermissionModel ])],
    controllers: [RolePermissionController],
    providers: [ RolePermissionService, RoleService, PermissionService ]
})
export class RolePermissionsModule {}
