import { TaskStatusModel } from "../model";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(TaskStatusModel)
export class TaskStatusRepository extends Repository<TaskStatusModel>{}