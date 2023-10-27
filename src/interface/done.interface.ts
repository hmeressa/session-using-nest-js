export interface DoneInterface {
  createDone(inProgressId: any, taskId: any): Promise<any>;
  getDone(inProgressId: any): Promise<any>;
  getDones(): Promise<any>;
}
