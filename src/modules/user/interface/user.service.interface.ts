import { ResData } from "src/lib/resdata";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { ID } from "src/common/types";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface IUserService {
    create(dto:CreateUserDto):Promise<ResData<User>>
    findAll():Promise<ResData<User[]>>
    findOne(id:ID):Promise<ResData<User>>
    update(id:ID, dto:UpdateUserDto):Promise<ResData<User>>
    delete(id:ID):Promise<ResData<void>>
}