import {
  BadRequestException,
  NotFoundException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionModel } from '../../model';
import { PermissionDto, PermissionUpdateDto } from '../../dto';
import { PermissionService } from '../../service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async createPermission(@Body() permissionDto: PermissionDto): Promise<any> {
    const isExist = await this.permissionService.getPermissionByName(
      permissionDto.name,
    );
    if (isExist) {
      return new BadRequestException({
        message: 'Something bad happened',
        error: 'Permission is already exist',
      });
    }
    return await this.permissionService.createPermission(permissionDto);
  }

  @Get(':id')
  async getPermission(@Param('id') id: string): Promise<any> {
    const permission = await this.permissionService.getPermission(id);
    if (!permission) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Permission Not Found',
      });
    }
    return permission;
  }

  @Get()
  async getPermissions(): Promise<any> {
    const permission = await this.permissionService.getPermissions();
    if (!permission) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Permission Not Found',
      });
    }
    return permission;
  }

  @Delete(':id')
  async deletePermission(@Param('id') id: string): Promise<any> {
    const permission = await this.getPermission(id);
    if (!permission) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Permission Not Found',
      });
    }
    await this.permissionService.deletePermission(id);
    return {
      message: 'Permission is Deleted',
      status: 'Success',
    };
  }

  @Patch(':id')
  async updatePermission(
    @Param('id') id: string,
    permissionUpdateDto: PermissionUpdateDto,
  ): Promise<any> {
    const permission = this.getPermission(id);
    if (!permission) {
      return new NotFoundException({
        message: 'Something bad happened',
        error: 'Permission Not Found',
      });
    }
    return await this.permissionService.updatePermission(
      id,
      permissionUpdateDto,
    );
  }
}
