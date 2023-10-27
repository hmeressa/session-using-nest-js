// project.model.ts

import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TaskModel } from './task.model';
import { BaseModel } from './base.model';
@Entity('projects')
export class ProjectModel extends BaseModel {
  @Column()
  name: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ nullable: true })
  status: string;

  @OneToMany(() => TaskModel, (task) => task.project)
  task: TaskModel;
}
