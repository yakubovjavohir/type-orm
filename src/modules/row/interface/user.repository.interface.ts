import { ID } from "src/common/types";
import { CreateRowDto } from "../dto/create-row.dto";
import { Row } from "../entities/row.entity";
import { UpdateRowDto } from "../dto/update-row.dto";

export interface IRowRepository {
    create(entity:CreateRowDto):Promise<Row | null>
    findAll():Promise<Array<Row>>
    findOne(id:ID):Promise<Row | null>
    update(id:ID, dto:UpdateRowDto):Promise<Row | null>
    delete(id:ID):Promise<void>
}