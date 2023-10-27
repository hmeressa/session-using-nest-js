import { Module } from '@nestjs/common';
import { AuthController } from '../../controller';
import { AuthService, UserService } from '../../service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../../model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [AuthController],
  providers: [AuthService, UserService],
  exports: [],
})
export class AuthModule {}
