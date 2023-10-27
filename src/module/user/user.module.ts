import { Module } from '@nestjs/common';
import { UserController } from '../../controller';
import { RoleService, UserService } from '../../service';
import { UserRepository } from '../../repository';
import { RoleModel, UserModel } from '../../model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([ UserModel, RoleModel ]) ],
  controllers: [ UserController ],
  providers: [ UserService, UserRepository, RoleService ],
  exports : [ UserService ]
})
export class UserModule {}
