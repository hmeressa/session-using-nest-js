//rolePermission.model.ts
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { RoleModel } from './role.model';
import { PermissionModel } from './permission.model';
import { BaseModel } from './base.model';

@Entity('rolePermssions')
export class RolePermissionModel {
  @PrimaryColumn({ primary: false })
  roleId: string;

  @PrimaryColumn({ primary: false })
  permissionId: string;

  @ManyToOne(() => RoleModel, (role) => role.permission)
  public role: RoleModel;

  @ManyToOne(() => PermissionModel, (permission) => permission.role)
  public permission: PermissionModel;
}
