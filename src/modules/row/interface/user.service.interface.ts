import { ResData } from "src/lib/resdata";
import { Row } from "../entities/row.entity";
import { CreateRowDto } from "../dto/create-row.dto";
import { ID } from "src/common/types";
import { UpdateRowDto } from "../dto/update-row.dto";

export interface IRowService {
    create(dto:CreateRowDto):Promise<ResData<Row>>
    findAll():Promise<ResData<Row[]>>
    findOne(id:ID):Promise<ResData<Row>>
    update(id:ID, dto:UpdateRowDto):Promise<ResData<Row>>
    delete(id:ID):Promise<ResData<void>>
}