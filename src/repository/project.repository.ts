import { EntityRepository, Repository } from "typeorm";
import { ProjectModel, RoleModel } from "../model";

@EntityRepository(ProjectModel)
export class PorjectRepository extends Repository<ProjectModel> {
}