import { UserTaskDto } from "../dto";

export interface UserTaskInterface{
    assignTaskToUser(userTaskDot: UserTaskDto): Promise<Object>;
    getUserTask(): Promise<Object>;
}
