// project.model.ts

import { BeforeInsert, Column, PrimaryColumn } from 'typeorm';
import * as uuid from 'uuid';
export class ProjectModel {
  @PrimaryColumn("uuid")
  id : string
    
  @Column()
  name: string;
    
  @Column()
  startDate: Date;
    
  @Column()
  endDate: Date;

  @BeforeInsert()
  async generateUUId(): Promise<any>{
      return await uuid.v4();
    }
}
