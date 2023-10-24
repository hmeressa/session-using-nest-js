import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './allModules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { InvalidUuidExceptionFilter } from './handler';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { verifyToken } from './middleware/auth.middleware';
import { RoleService } from './service/role/role.service';
import { RoleModule } from './module';
import { RoleModel } from './model';
import { RolePermissionService } from './service/role-permission/role-permission.service';
import { RolePermissionController } from './controller/role-permission/role-permission.controller';
import { ProjectService } from './service/project/project.service';
import { ProjectController } from './controller/project/project.controller';
import { ProjectModuleModule } from './module/project/project.module';


@Module({
  imports: [ TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: "12345678",
          database: 'nest-js-learning-session',
          entities: [__dirname + '/**/*.model{.ts,.js}'],
          synchronize: true,
     }), AllModules, ProjectModuleModule ],
  controllers: [AppController, RolePermissionController, ProjectController ],
  providers: [
    AppService,
  {
    provide: APP_FILTER,
    useClass: InvalidUuidExceptionFilter,
  },
  RolePermissionService,
  ProjectService,  
],
  
})
export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(verifyToken)
      .forRoutes('users');
  }
}
 