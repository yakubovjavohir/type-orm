import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDetailsDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserDetailRepository } from './user.repository';
import { ID } from 'src/common/types';
import { ResData } from 'src/lib/resdata';
import { UserDetails } from './entities/user-detail.entity';
import { UserDetailFound } from './exception/error';

@Injectable()
export class UserDetailsService {

  constructor(
    @Inject("IUserDetailRepository") private readonly userRepository:UserDetailRepository
  ){}
 async findOne(id: ID): Promise<ResData<UserDetails>> {
    const data = await this.userRepository.findOne(id)

    if(!data){
      throw new UserDetailFound()
    }

    return new ResData<UserDetails>(200, "success", data)
  }
 async update(id: ID, dto: UpdateUserDetailDto): Promise<ResData<UserDetails>> {
  const data = await this.userRepository.update(id,dto)
  const resdata = new ResData<UserDetails>(200, "update", data)
  return resdata
  }
 async delete(id: ID): Promise<ResData<void>> {
  await this.userRepository.delete(id)
  const resdata = new ResData<null>(201, "deleted", null)
  return resdata
  }

  async create(dto: CreateUserDetailsDto): Promise<ResData<UserDetails>> {
    const data = await this.userRepository.create(dto)
    const resdata = new ResData<UserDetails>(201, "created", data)
    return resdata
  }

  async findAll(): Promise<ResData<UserDetails[]>> {
    const data = await this.userRepository.findAll()
    const resdata = new ResData<UserDetails[]>(201, "created", data)
    return resdata
  }
}
