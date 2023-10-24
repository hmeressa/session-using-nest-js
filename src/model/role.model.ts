import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import * as uuid from 'uuid';
import { UserModel } from './user.model';
import { PermissionModel } from './permission.model';

@Entity("roles")
export class RoleModel {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
    
  @BeforeInsert()
  async generateId() : Promise<any> {
    this.id = await uuid.v4();
    }

  @OneToMany(() => UserModel, user => user.role)
  user: UserModel;
    
  @ManyToMany(() => PermissionModel, permissions => permissions.roles)
  @JoinTable({ name: 'rolePermission' })
  permissions: PermissionModel[];
}
