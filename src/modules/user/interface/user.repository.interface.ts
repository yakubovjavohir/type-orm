import { ID } from "src/common/types";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";

export interface IUserRepository {
    create(entity:CreateUserDto):Promise<User | null>
    findAll():Promise<Array<User>>
    findOne(id:ID):Promise<User | null>
    update(id:ID, dto:UpdateUserDto):Promise<User | null>
    delete(id:ID):Promise<void>
}