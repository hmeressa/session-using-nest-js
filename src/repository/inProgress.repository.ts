import { EntityRepository, Repository } from "typeorm";
import { InProgressModel } from "../model";

@EntityRepository(InProgressModel)
export class InProgressModelRepository extends Repository<InProgressModel> {
}