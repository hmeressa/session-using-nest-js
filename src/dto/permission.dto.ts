// permission.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from '../model';

export class PermissionDto extends BaseModel {
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter permission name' })
  @IsString()
  name: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter slug name' })
  @IsString()
  slug: string;  
}
