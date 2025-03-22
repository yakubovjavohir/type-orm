import { InjectRepository } from "@nestjs/typeorm";
import { Row } from "./entities/row.entity";
import { IRowRepository } from "./interface/user.repository.interface";
import { Repository } from "typeorm";
import { CreateRowDto } from "./dto/create-row.dto";
import { ID } from "src/common/types";
import { UpdateRowDto } from "./dto/update-row.dto";
import { Category } from "../category/entities/category.entity";

export class RowRepository implements IRowRepository {
    
    constructor(
        @InjectRepository(Row)
        private rowModel: Repository<Row>,

        @InjectRepository(Row)
        private categoryRepository: Repository<Category>,
    ){}
    async findOne(id: ID): Promise<Row | null> {
        const data = await this.rowModel.findOneBy({id})
        return data
    }
    async update(id: ID, dto: UpdateRowDto): Promise<Row | null> {
        await this.rowModel.update(id, dto)
        return this.findOne(id)
    }
    async delete(id: ID): Promise<void> {
        await this.rowModel.delete({id})
    }

    async create(entity: CreateRowDto): Promise<Row | null> {
        const id = Number(entity.categoryId)
        const category = await this.categoryRepository.findOne({
            where:{id}
        });
        if (!category) throw new Error("Category not found");
    
        const row = this.rowModel.create({
            name: entity.name,
            category: category,
        });
    
        return await this.rowModel.save(row);
    }
    async findAll(): Promise<Array<Row>> {
        const data = await this.rowModel.find({
            relations:['category']
        })        
        return data
    }
}