import { Controller, Param, Post, Body, NotFoundException, Get } from '@nestjs/common';
import { PermissionService, RolePermissionService, RoleService } from '../../service';
import { RolePermissionDto } from '../../dto';

@Controller('role-permission')
export class RolePermissionController {
    constructor(private readonly rolePermissionService: RolePermissionService,
                        private readonly roleService: RoleService,
                        private readonly permissionService : PermissionService) { }
    
    @Post()
    async assignPermissionToRole(@Body() rolePermissionDto: RolePermissionDto): Promise<any>{
       
        const { roleId, permissionId } = rolePermissionDto; 
        const role = await this.roleService.getRole(roleId);
        if (!role) {
             return new NotFoundException({
                 message: "Something bad happened",
                error: "Role Not Found"
            }) 
        }
        permissionId?.map(async (permissionId) => {
            const permission = await this.permissionService.getPermission(permissionId);
                if (!permission) {
                    return new NotFoundException({
                        message: "Something bad happened",
                        error: "Permission Not Found"
                    })
                  } 
                })
        return await this.rolePermissionService.assignPermissionToRole(rolePermissionDto);
    }

    @Get()
    async getRolePermission(): Promise<any>{
        return "get role permissions"
    }
}
