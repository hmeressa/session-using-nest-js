// permission.dto.ts
import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter permission name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter slug name' })
  @IsString()
  slug: string;  
}
