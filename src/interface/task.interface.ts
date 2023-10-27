import { TaskDto, TaskUpdateDto } from "../dto";

export interface TaskInterface{
    createTask(taskDto: TaskDto): Promise<any>;
    getTask(id: string): Promise<any>;
    getTasks(): Promise<any>;
    deleteTask(id: string): Promise<any>;
    updateTask(id: string, taskUpdateDto: TaskUpdateDto): Promise<any>;
    getTaskByName(name: string): Promise<any>;
}