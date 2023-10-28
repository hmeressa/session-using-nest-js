import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './allModules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { InvalidUuidExceptionFilter } from './handler';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserAuthorization } from './middleware';
import { UserService } from './service';
import { UserModel } from './model';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.host,
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserModel]),
    AllModules,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_FILTER,
      useClass: InvalidUuidExceptionFilter,
    },
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(UserAuthorization).exclude('auth').forRoutes('*');
//   }
// }
