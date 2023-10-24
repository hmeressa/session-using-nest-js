// projectUpdate.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectUpdateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter project name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter project start date' })
  @IsString()
  startDate: Date;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter project end date' })
  @IsString()
  endDate: Date;
    

}
