//permission.model.ts
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { RoleModel } from './role.model';
import { BaseModel } from './base.model';

@Entity('permissions')
export class PermissionModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToMany(() => RoleModel, (role) => role.permission)
  @JoinTable({
    name: 'rolePermssions', // name of the pivot table
    joinColumn: {
      name: 'permissionId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'roleId',
      referencedColumnName: 'id',
    },
  })
  public role: RoleModel[];
}
