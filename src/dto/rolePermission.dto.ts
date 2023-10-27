//permission.model.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import {  } from 'typeorm';

export class RolePermissionDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter role id' })
  @IsString()
  roleId: string;
    
  @ApiProperty()
  @IsNotEmpty({ message: 'Please enter permission' })
  @IsArray()
  @IsString({ each: true })
  permissionId: string[]; 
}
