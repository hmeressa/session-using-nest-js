import { EntityRepository, Repository } from "typeorm";
import { RoleModel } from "../model";

@EntityRepository(RoleModel)
export class RoleRepository extends Repository<RoleModel> {
}