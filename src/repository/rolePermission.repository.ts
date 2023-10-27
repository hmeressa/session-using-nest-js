import { EntityRepository, Repository } from "typeorm";
import { RolePermissionModel } from "../model";

@EntityRepository(RolePermissionModel)
export class RolePermissionRepository extends Repository<RolePermissionModel> {
}