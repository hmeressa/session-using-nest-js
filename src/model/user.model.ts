import { hashSync } from 'bcrypt';
import { Entity, Column, PrimaryColumn, BeforeInsert, OneToMany, ManyToOne } from 'typeorm';
import * as uuid from 'uuid';
import { RoleModel } from './role.model';

@Entity("users")
export class UserModel {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    if (this.password) {
      this.password = hashSync(this.password, 10);
    }
  }
  @BeforeInsert()
  async generateId() : Promise<any> {
    this.id = await uuid.v4();
  }

  @ManyToOne(() => RoleModel, role => role.user)
  role: RoleModel;
}
