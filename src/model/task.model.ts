// task.model.ts

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { TaskStatusModel } from './taskStatus.model';
import { ProjectModel } from './project.model';
import { UserModel } from './user.model';
import { BaseModel } from './base.model';
import { TodoModel } from './todo.model';

@Entity('tasks')
export class TaskModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  projectId: string;

  @Column({ nullable: true })
  taskStatusId: string;

  @ManyToOne(() => UserModel, (user) => user.task, { nullable: true })
  user: UserModel[];

  @ManyToOne(() => TaskStatusModel, (taskStatus) => taskStatus.task, {
    nullable: true,
  })
  taskStatus: TaskStatusModel;

  @ManyToOne(() => ProjectModel, (project) => project.task)
  project: ProjectModel;

  @OneToMany(() => TodoModel, (todo) => todo.inProgress)
  todo: TodoModel;
}
