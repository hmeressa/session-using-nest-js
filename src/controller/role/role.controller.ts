import { RoleService } from '../../service';
import { RoleDto, RoleUpdateDto } from '../../dto';
import { Controller, Post,Get, Delete,Patch, Body, Param, NotFoundException } from '@nestjs/common';


@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }
    
    @Post()
    async createRole(@Body() roleDto: RoleDto): Promise<any>{
        const isExist = await this.roleService.getRoleByName(roleDto.name);
        if (isExist) {
            return new NotFoundException({
                 message: "Something bad happened",
                error: "Role already exist"
            }) 
        }
        return this.roleService.createRole(roleDto);
    }

    @Get(":id")
    async getRole(@Param("id") id: string): Promise<any>{
        const role = await this.roleService.getRole(id);
        if (!role) {
             return new NotFoundException({
                 message: "Something bad happened",
                error: "Role Not Found"
            })
        }
        return this.roleService.getRole(id);
    }

    @Get()
    async getRoles(): Promise<any>{
        const role = await this.roleService.getRoles();
        if (!role) {
             return new NotFoundException({
                message: "Something bad happened",
                error: "Permission Not Found"
            })
        }
        return this.roleService.getRoles();
    }

    @Delete(":id")
    async deleteRole(@Param("id") id: string): Promise<any>{
        const role = await this.getRole(id);
        if (!role) {
             return new NotFoundException({
                 message: "Something bad happened",
                error: "Permission Not Found"
            })
        }
         await this.roleService.deleteRole(id);
        return {
            message: "Role is Deleted",
            status : "Success"
        }
    }

    @Patch()
    async updateRole(@Param("id") id: string, @Body() roleUpdateDto: RoleUpdateDto): Promise<any>{
        const role = await this.getRole(id);
        if (!role) {
             return new NotFoundException({
                message: "Something bad happened",
                error: "Permission Not Found"
            })
        }
        return this.roleService.updateRole(id, roleUpdateDto);
    }
}

