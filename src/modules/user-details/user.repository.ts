import { InjectRepository } from "@nestjs/typeorm";
import { UserDetails } from "./entities/user-detail.entity";
import { IUserDetailRepository } from "./interface/user.repository.interface";
import { Repository } from "typeorm";
import { CreateUserDetailsDto } from "./dto/create-user-detail.dto";
import { ID } from "src/common/types";
import { UpdateUserDetailDto } from "./dto/update-user-detail.dto";

export class UserDetailRepository implements IUserDetailRepository {
    
    constructor(
        @InjectRepository(UserDetails)
        private usersModel: Repository<UserDetails>,
    ){}
    async findOne(id: ID): Promise<UserDetails | null> {
        const data = await this.usersModel.findOneBy({id})
        return data
    }
    async update(id: ID, dto: UpdateUserDetailDto): Promise<UserDetails | null> {
        await this.usersModel.update(id, dto)
        return this.findOne(id)
    }
    async delete(id: ID): Promise<void> {
        await this.usersModel.delete({id})
    }

    async create(entity: CreateUserDetailsDto): Promise<UserDetails> {
        const data = await this.usersModel.create({...entity})
        return await this.usersModel.save(data);
    }
    async findAll(): Promise<Array<UserDetails>> {
        const data = await this.usersModel.find()
        console.log(data);
        
        return data
    }
}