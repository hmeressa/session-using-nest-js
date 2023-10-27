import { Injectable } from '@nestjs/common';
import { RolePermissionRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RolePermissionModel } from '../../model';
import { RolePermissionDto } from 'src/dto';
import { RolePermissionInterface } from '../../interface';

@Injectable()
export class RolePermissionService implements RolePermissionInterface  {
    constructor(@InjectRepository(RolePermissionModel)
    private readonly rolePermissionRepository: RolePermissionRepository) { }

    async assignPermissionToRole(rolePermissionDto: RolePermissionDto): Promise<any>{
        const { roleId, permissionId } = rolePermissionDto;
        const roleToPermission = permissionId?.map(( permissionId ) => {
            const assignRoleToPermission = this.rolePermissionRepository.create({
                roleId: roleId,
                permissionId : permissionId
            })
            return assignRoleToPermission;
        })
     return await this.rolePermissionRepository.save(roleToPermission);
}

    async getRolePermission(): Promise<any>{
        
    }
    
}
