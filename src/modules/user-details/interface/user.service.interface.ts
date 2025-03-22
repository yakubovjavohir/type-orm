import { ResData } from "src/lib/resdata";
import { UserDetails } from "../entities/user-detail.entity";
import { CreateUserDetailsDto } from "../dto/create-user-detail.dto";
import { UpdateUserDetailDto } from "../dto/update-user-detail.dto";
import { ID } from "src/common/types";

export interface IUserDetailService {
    create(dto:CreateUserDetailsDto):Promise<ResData<UserDetails>>
    findAll():Promise<ResData<UserDetails[]>>
    findOne(id:ID):Promise<ResData<UserDetails>>
    update(id:ID, dto:UpdateUserDetailDto):Promise<ResData<UserDetails>>
    delete(id:ID):Promise<ResData<void>>
}