import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { IUserService } from './interface/user.service.interface';
import { ResData } from 'src/lib/resdata';
import { User } from './entities/user.entity';
import { ID } from 'src/common/types';
import { UserNotFound } from './exception/error';
import { ReturnDocument } from 'typeorm';

@Injectable()
export class UserService implements IUserService{

  constructor(
    @Inject("IUserRepository") private readonly userRepository:UserRepository
  ){}
 async findOne(id: ID): Promise<ResData<User>> {
    const data = await this.userRepository.findOne(id)

    if(!data){
      throw new UserNotFound()
    }

    return new ResData<User>(200, "success", data)
  }
 async update(id: ID, dto: UpdateUserDto): Promise<ResData<User>> {
  const data = await this.userRepository.update(id,dto)
  const resdata = new ResData<User>(200, "update", data)
  return resdata
  }
 async delete(id: ID): Promise<ResData<void>> {
  await this.findOne(id)
  await this.userRepository.delete(id)
  const resdata = new ResData<null>(201, "deleted", null)
  return resdata
  }

  async create(dto: CreateUserDto): Promise<ResData<User>> {    
    const data = await this.userRepository.create(dto)
    const resdata = new ResData<User>(201, "created", data)
    return resdata
  }

  async findAll(): Promise<ResData<User[]>> {
    const data = await this.userRepository.findAll()
    const resdata = new ResData<User[]>(201, "created", data)
    return resdata
  }
}
