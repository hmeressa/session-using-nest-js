//role.model.ts

import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserModel } from './user.model';
import { PermissionModel } from './permission.model';
import { BaseModel } from './base.model';

@Entity('roles')
export class RoleModel extends BaseModel {
  @Column()
  name: string;

  @OneToMany(() => UserModel, (user) => user.role)
  user: UserModel;

  @ManyToMany(() => PermissionModel, (permission) => permission.role)
  @JoinTable({
    name: 'rolePermssions', // name of the pivot table
    joinColumn: {
      name: 'roleId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'permissionId',
      referencedColumnName: 'id',
    },
  })
  public permission: PermissionModel[];
}
