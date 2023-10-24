import { RoleDto, RoleUpdateDto } from "../dto";

export interface RoleInterface{
    createRole(roleDto: RoleDto): Promise<Object>;
    getRole(id: string): Promise<Object>;
    getRoles(): Promise<Object>;
    deleteRole(id : string): Promise<Object>;
    updateRole(id: string, roleUpdateDto: RoleUpdateDto): Promise<Object>;
}
