// role.dto.ts
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from 'src/model';

export class RoleDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter role name' })
  @IsString()
  name: string;
}
