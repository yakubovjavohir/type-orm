import { Module } from '@nestjs/common';
import { RowService } from './row.service';
import { RowController } from './row.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { Row } from './entities/row.entity';
import { RowRepository } from './row.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Row])],
  controllers: [RowController],
  providers: [
    {provide:"IRowRepository", useClass:RowRepository},
    {provide:"IRowService", useClass:RowService},
  ],
})
export class RowModule {}
