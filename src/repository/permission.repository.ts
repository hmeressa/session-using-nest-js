import { EntityRepository, Repository } from "typeorm";
import { PermissionModel } from "../model";

@EntityRepository(PermissionModel)
export class PermissionRepository extends Repository<PermissionModel> {
}