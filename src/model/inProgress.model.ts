// inProgress.model.ts

import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { TaskModel } from './task.model';
import { TodoModel } from './todo.model';

@Entity('inProgress')
export class InProgressModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  todoId: string;

  @ManyToOne(() => TodoModel, (todo) => todo.inProgress)
  todo: TodoModel;
}
