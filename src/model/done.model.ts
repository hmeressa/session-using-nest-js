// done.model.ts

import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { TaskModel } from './task.model';
import { UserModel } from './user.model';
import { InProgressModel } from './inProgress.model';

@Entity('dones')
export class DoneModel extends BaseModel {
  @Column()
  name: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  inProgressId: string;

  @ManyToOne(() => InProgressModel, (inProgress) => inProgress.todo)
  inProgress: InProgressModel;
}
