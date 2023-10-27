import { InProgressModel } from '../model';
import { InProgressDto } from '../dto';

export interface InProgressInterface {
  createInProgress(todoId: any, inProgressId: any): Promise<any>;
  getInProgress(inProgressId: string): Promise<any>;
}
