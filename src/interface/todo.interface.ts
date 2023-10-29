import { TodoDto } from '../dto';

export interface TodoInterface {
  createTodo(taskId: any, userId: any): Promise<any>;
  getTodo(todoId: string): Promise<any>;
  getTodos(): Promise<any>;
  deleteTodo(id: string): Promise<any>;
}
