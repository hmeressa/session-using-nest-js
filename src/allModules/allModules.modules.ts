import { Module } from '@nestjs/common';
import {
  AuthModule,
  PermissionModule,
  ProjectModule,
  RoleModule,
  TaskStatusModule,
  UserModule,
  TaskModule,
  UserTaskModule,
  RolePermissionsModule,
  TodoModule,
  InProgressModule,
  DoneModule,
} from '../module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    ProjectModule,
    TaskModule,
    TaskStatusModule,
    RolePermissionsModule,
    UserTaskModule,
    TodoModule,
    InProgressModule,
    DoneModule,
  ],
  exports: [],
})
export class AllModules {}
