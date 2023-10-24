import { EntityRepository, Repository } from "typeorm";
import { UserModel } from "../model";

@EntityRepository(UserModel)
export class UserRepository extends Repository<UserModel> {
}