import { Module } from '@nestjs/common';
import { UserController } from '../../controller';
import { UserService } from '../../service';
import { UserRepository } from '../../repository';
import { UserModel } from '../../model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([ UserModel ]) ],
  controllers: [ UserController ],
  providers: [UserService,UserRepository],
  exports : [ ]
})
export class UserModule {}
