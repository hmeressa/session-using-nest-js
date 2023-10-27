// todo.model.ts

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { TaskModel } from './task.model';
import { UserModel } from './user.model';
import { InProgressModel } from './inProgress.model';

@Entity('todos')
export class TodoModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  taskId: string;

  @OneToMany(() => InProgressModel, (inProgress) => inProgress.todo)
  inProgress: InProgressModel;
}
