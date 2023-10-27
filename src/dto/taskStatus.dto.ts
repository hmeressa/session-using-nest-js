// taskStatus.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TaskStatusDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task status name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task status' })
  @IsString()
  status: string;

}
