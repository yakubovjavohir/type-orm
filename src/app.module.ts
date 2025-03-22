import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { UserDetailsModule } from './modules/user-details/user-details.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entities/user.entity';
import { UserDetails } from './modules/user-details/entities/user-detail.entity';
import { RowModule } from './modules/row/row.module';
import { Category } from './modules/category/entities/category.entity';
import { Row } from './modules/row/entities/row.entity';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '23032006yj',
    database: 'type_orm',
    entities: [User, UserDetails, Category, Row],
    synchronize: true,
  }),UserModule, CategoryModule, UserDetailsModule, RowModule],
})
export class AppModule {}
