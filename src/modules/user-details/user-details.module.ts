import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { UserDetailRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from './entities/user-detail.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,UserDetails])],
  controllers: [UserDetailsController],
  providers: [
    {provide:"IUserDetailRepository", useClass:UserDetailRepository},
    {provide:"IUserDetailService", useClass:UserDetailsService}
  ],
  exports: [TypeOrmModule],
})
export class UserDetailsModule {}
