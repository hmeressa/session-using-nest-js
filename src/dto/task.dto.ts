import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatusDto } from './taskStatus.dto';
import { Optional } from '@nestjs/common';

export class TaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task name' })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task start date' })
  @IsString()
  startDate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter task end date' })
  @IsString()
  endDate: string;

  @ValidateNested()
  @Type(() => TaskStatusDto)
  taskStatus: TaskStatusDto;
}
