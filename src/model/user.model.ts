//user.model.ts
import { hashSync } from 'bcrypt';
import { Entity, Column, BeforeInsert, OneToMany, ManyToOne } from 'typeorm';
import { RoleModel } from './role.model';
import { BaseModel } from './base.model';
import { TodoModel } from './todo.model';
import { TaskModel } from './task.model';

@Entity('users')
export class UserModel extends BaseModel {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  roleId: string;

  @BeforeInsert()
  hashPassword() {
    if (this.password) {
      this.password = hashSync(this.password, 10);
    }
  }
  @ManyToOne(() => RoleModel, (role) => role.user)
  role: RoleModel;

  @OneToMany(() => TodoModel, (todo) => todo.inProgress)
  todo: TodoModel;

  @OneToMany(() => TaskModel, (task) => task.user)
  task: TaskModel;
}
