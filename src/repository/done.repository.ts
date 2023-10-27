import { EntityRepository, Repository } from "typeorm";
import { DoneModel } from "../model";

@EntityRepository(DoneModel)
export class DoneRepository extends Repository<DoneModel> {
}