import { TaskStatusDto } from "../dto";

export interface TaskStatusInterface{
    createTaskStatus(taskStatusDto: TaskStatusDto): Promise<any>;
    getTaskStatus(id: string): Promise<any>;
    getTaskStatusses(): Promise<any>;
}