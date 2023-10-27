// taskStatus.model.ts
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { TaskModel } from './task.model';
import { BaseModel } from './base.model';

@Entity('taskStatus')
export class TaskStatusModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  status: string;

  @OneToMany(() => TaskModel, (task) => task.taskStatus)
  task: TaskModel;
}
