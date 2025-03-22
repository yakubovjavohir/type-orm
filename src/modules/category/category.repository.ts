import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { ICategoryRepository } from "./interface/user.repository.interface";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { ID } from "src/common/types";
import { UpdateCategoryDto } from "./dto/update-category.dto";

export class CategoryRepository implements ICategoryRepository {
    
    constructor(
        @InjectRepository(Category)
        private usersModel: Repository<Category>,
    ){}
    async findOne(id: ID): Promise<Category | null> {
        const data = await this.usersModel.findOneBy({id})
        return data
    }
    async update(id: ID, dto: UpdateCategoryDto): Promise<Category | null> {
        await this.usersModel.update(id, dto)
        return this.findOne(id)
    }
    async delete(id: ID): Promise<void> {
        await this.usersModel.delete({id})
    }

    async create(entity: CreateCategoryDto): Promise<Category> {
        const data = await this.usersModel.create({...entity})
        return await this.usersModel.save(data);
    }
    async findAll(): Promise<Array<Category>> {
        const data = await this.usersModel.find({
            relations:['rows']
        })        
        return data
    }
}