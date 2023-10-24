// role.dto.ts
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter role name' })
  @IsString()
  name: string;
}
