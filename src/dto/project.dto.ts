// project.dto.ts
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from 'src/model';
import { ProjectStatus } from './projectStatus.dto';

export class ProjectDto extends BaseModel {
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

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter project status' })
  @IsEnum(ProjectStatus)
  status: ProjectStatus;
}
