import { PermissionDto, PermissionUpdateDto } from '../dto';

export interface PermissionInterface {
  createPermission(permissionDto: PermissionDto): Promise<Object>;
  getPermission(id: string): Promise<PermissionDto>;
  getPermissions(): Promise<Object>;
  deletePermission(id: string): Promise<Object>;
  updatePermission(
    id: string,
    permissionUpdateDto: PermissionUpdateDto,
  ): Promise<Object>;
  getPermissionByName(permission: string): Promise<any>;
}
