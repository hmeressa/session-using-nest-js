import { Injectable } from '@nestjs/common';
import { PermissionDto, PermissionUpdateDto, UserDto, } from '../../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionModel } from '../../model';
import { PermissionRepository } from '../../repository';
import { PermissionInterface } from '../../interface';

@Injectable()
export class PermissionService implements PermissionInterface {
    constructor(
        @InjectRepository(PermissionModel)
        private readonly permissionRepository: PermissionRepository) { }
    
    async createPermission(permissionDto : PermissionDto) : Promise<Object> {
        const role = await this.permissionRepository.create(permissionDto);
        return await this.permissionRepository.save(role);
    }

     async getPermission(id: string) : Promise<PermissionDto> {
         return await this.permissionRepository.findOne({ where: { id: id } });
    }
    
    async getPermissions() : Promise<Object> {
         return await this.permissionRepository.find(); 
    }
    
    async getPermissionByName(permission: string): Promise<any>{
        return await this.permissionRepository.findOne({ where: { name: permission } });
    }

    async deletePermission(id: string) : Promise<any> {
         return await this.permissionRepository.delete(id);
    }
    
    async updatePermission(id : any, permissionUpdateDto: PermissionUpdateDto) : Promise<any> {
         return this.permissionRepository.update(id, permissionUpdateDto);
    }
}
