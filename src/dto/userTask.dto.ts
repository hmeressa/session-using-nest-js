// userTask.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../model';

export class UserTaskDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter user id' })
  @IsString()
  userId: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task id' })
  @IsString()
  taskId: string[];  
}
