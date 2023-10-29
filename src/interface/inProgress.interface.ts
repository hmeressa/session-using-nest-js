export interface InProgressInterface {
  createInProgress(todoId: any, inProgressId: any): Promise<any>;
  getInProgress(id: string): Promise<any>;
  getInProgresses(): Promise<any>;
  deleteInProgress(id: string): Promise<any>;
}
