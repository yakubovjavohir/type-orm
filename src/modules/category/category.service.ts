import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';
import { ResData } from 'src/lib/resdata';
import { ID } from 'src/common/types';
import { Category } from './entities/category.entity';
import { CategoryNotFound } from './exception/error';
import { ICategoryService } from './interface/user.service.interface';

@Injectable()
export class CategoryService implements ICategoryService{

  constructor(
    @Inject("ICategoryRepository") private readonly categoryRepository:CategoryRepository
  ){}
 async findOne(id: ID): Promise<ResData<Category>> {
    const data = await this.categoryRepository.findOne(id)

    if(!data){
      throw new CategoryNotFound()
    }

    return new ResData<Category>(200, "success", data)
  }
 async update(id: ID, dto: UpdateCategoryDto): Promise<ResData<Category>> {
  const data = await this.categoryRepository.update(id,dto)
  const resdata = new ResData<Category>(200, "update", data)
  return resdata
  }
 async delete(id: ID): Promise<ResData<void>> {
  await this.findOne(id)
  await this.categoryRepository.delete(id)
  const resdata = new ResData<null>(201, "deleted", null)
  return resdata
  }

  async create(dto: CreateCategoryDto): Promise<ResData<Category>> {
    const data = await this.categoryRepository.create(dto)
    const resdata = new ResData<Category>(201, "created", data)
    return resdata
  }

  async findAll(): Promise<ResData<Category[]>> {
    const data = await this.categoryRepository.findAll()
    const resdata = new ResData<Category[]>(201, "created", data)
    return resdata
  }
}
