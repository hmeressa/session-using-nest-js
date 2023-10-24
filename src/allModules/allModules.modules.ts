import { Module } from '@nestjs/common';
import {
    AuthModule,
    PermissionModule,
    ProjectModule,
    RoleModule,
    UserModule
} from '../module';


@Module({
    imports: [
        UserModule,
        AuthModule,
        RoleModule,
        PermissionModule,
        ProjectModule
    ],
    exports : [ ]
})
export class AllModules {}
