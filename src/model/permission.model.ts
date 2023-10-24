import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToMany } from 'typeorm';
import * as uuid from 'uuid';
import { RoleModel } from './role.model';

@Entity("permssions")
export class PermissionModel {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
    
  @Column()
  slug: string;

  @BeforeInsert()
  async generateId() : Promise<any> {
    this.id = await uuid.v4();
    }
    
  @ManyToMany(() => RoleModel, role => role.permissions)
  roles: RoleModel[];
}
