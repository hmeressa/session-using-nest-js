import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
     TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: "12345678",
          database: 'nest-js-learning-session',
          entities: [__dirname + '/**/*.model{.ts,.js}'],
          synchronize: true,
     }),
  ],
  exports :  [ TypeOrmModule ],
  controllers: [],
  providers: [],
})
export class DBConfigModule {}