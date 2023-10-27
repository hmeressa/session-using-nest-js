import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTaskController } from '../../controller';
import { UserTaskService } from '../../service';

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [UserTaskController],
    providers: [ UserTaskService ]
})
export class UserTaskModule {}
