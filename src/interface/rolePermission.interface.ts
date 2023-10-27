import { RolePermissionDto } from "../dto";

export interface RolePermissionInterface{
    assignPermissionToRole(rolePermissionDto: RolePermissionDto): Promise<Object>;
    getRolePermission(): Promise<Object>;
}
