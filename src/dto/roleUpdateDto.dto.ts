// roleUpdateDto.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleUpdateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter role name' })
  @IsString()
  name: string;
}
