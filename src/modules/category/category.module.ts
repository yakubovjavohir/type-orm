import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Row } from '../row/entities/row.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Category, Row])],
  controllers: [CategoryController],
  providers: [
    {provide:"ICategoryRepository", useClass:CategoryRepository},
    {provide:"ICategoryService", useClass:CategoryService},
  ],
  exports:[TypeOrmModule]
})
export class CategoryModule {}
