import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter todo name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter todo start date' })
  @IsString()
  startDate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter todo end date' })
  @IsString()
  endDate: string; 
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task id' })
  @IsString()
  taskId: string; 

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter user id' })
  @IsString()
  userId: string; 
}
