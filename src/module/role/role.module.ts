import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from '../../model';
import { RoleController } from '../../controller';
import { RoleService } from '../../service';
import { RoleRepository } from '../../repository';

@Module({
    imports: [ TypeOrmModule.forFeature([ RoleModel ]) ],
    controllers: [ RoleController],
    providers: [ RoleService, RoleRepository ],
})
export class RoleModule {}
