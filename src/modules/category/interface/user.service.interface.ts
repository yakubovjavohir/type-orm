import { ResData } from "src/lib/resdata";
import { Category } from "../entities/category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { ID } from "src/common/types";
import { UpdateCategoryDto } from "../dto/update-category.dto";

export interface ICategoryService {
    create(dto:CreateCategoryDto):Promise<ResData<Category>>
    findAll():Promise<ResData<Category[]>>
    findOne(id:ID):Promise<ResData<Category>>
    update(id:ID, dto:UpdateCategoryDto):Promise<ResData<Category>>
    delete(id:ID):Promise<ResData<void>>
}