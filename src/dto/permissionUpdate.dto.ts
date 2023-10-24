// permissionUpdateDto.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PermissionUpdateDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter permission name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter slug name' })
  @IsString()
  slug: string;  
}
