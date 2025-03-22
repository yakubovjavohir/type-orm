import { ID } from "src/common/types";
import { CreateUserDetailsDto } from "../dto/create-user-detail.dto";
import { UpdateUserDetailDto } from "../dto/update-user-detail.dto";
import { UserDetails } from "../entities/user-detail.entity";

export interface IUserDetailRepository {
    create(entity:CreateUserDetailsDto):Promise<UserDetails>
    findAll():Promise<Array<UserDetails>>
    findOne(id:ID):Promise<UserDetails | null>
    update(id:ID, dto:UpdateUserDetailDto):Promise<UserDetails | null>
    delete(id:ID):Promise<void>
}