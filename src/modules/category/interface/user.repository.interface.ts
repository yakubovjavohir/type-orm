import { ID } from "src/common/types";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { Category } from "../entities/category.entity";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface ICategoryRepository {
    create(entity:CreateCategoryDto):Promise<Category>
    findAll():Promise<Array<Category>>
    findOne(id:ID):Promise<Category | null>
    update(id:ID, dto:UpdateCategoryDto):Promise<Category | null>
    delete(id:ID):Promise<void>
}