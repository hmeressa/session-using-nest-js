import { EntityRepository, Repository } from "typeorm";
import { TodoModel } from "../model";

@EntityRepository(TodoModel)
export class TodoRepository extends Repository<TodoModel> {
}