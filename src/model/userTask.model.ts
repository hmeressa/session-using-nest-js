//userTask.model.ts
import { Entity, Column } from 'typeorm';
import { BaseModel } from './base.model';

@Entity('userTask')
export class UserTaskModel extends BaseModel {
  @Column()
  userId: string;

  @Column()
  taskId: string;
}
