export interface DoneInterface {
  createDone(inProgressId: any, taskId: any): Promise<any>;
  getDone(inProgressId: string): Promise<any>;
  getDones(): Promise<any>;
}
