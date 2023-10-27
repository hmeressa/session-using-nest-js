import { EntityRepository, Repository } from "typeorm";
import { ProjectModel } from "../model";

@EntityRepository(ProjectModel)
export class PorjectRepository extends Repository<ProjectModel> {
}