// taskStatusUpdate.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TaskUpdateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task start date' })
  @IsString()
  startDate: Date;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task end date' })
  @IsString()
  endDate: Date;
    

}
