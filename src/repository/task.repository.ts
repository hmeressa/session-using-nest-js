import { EntityRepository, Repository } from "typeorm";
import { TaskModel } from "../model";

@EntityRepository(TaskModel)
export class TaskRepository extends Repository<TaskModel> {
}