import {
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as uuid from 'uuid';

export class BaseModel {
  @PrimaryColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Hook to update `updatedAt` timestamp before each update
  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  // Hook to set `createdAt` and `updatedAt` timestamps before insert
  @BeforeInsert()
  setTimestamps() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  async generateId(): Promise<any> {
    this.id = await uuid.v4();
  }
}
