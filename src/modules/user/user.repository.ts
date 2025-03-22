import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { IUserRepository } from "./interface/user.repository.interface";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { ID } from "src/common/types";
import { UpdateUserDto } from "./dto/update-user.dto";

export class UserRepository implements IUserRepository {
    
    constructor(
        @InjectRepository(User)
        private usersModel: Repository<User>,
    ){}
    async findOne(id: ID): Promise<User | null> {
        const data = await this.usersModel.findOne({
            where:{id},
            relations:['details']
        })
        return data
    }
    async update(id: ID, dto: UpdateUserDto): Promise<User | null> {
        await this.usersModel.update(id, dto)
        return this.findOne(id)
    }
    async delete(id: ID): Promise<void> {
        await this.usersModel.delete({id})
    }

    async create(entity: CreateUserDto): Promise<User | null> {
        
        const user = this.usersModel.create({
            ...entity,
            details:entity.userDetailsId?{id:entity.userDetailsId} as any : undefined 
        })

        const savedUser = await this.usersModel.save(user);
    
        return await this.usersModel.findOne({
            where:{id:savedUser.id},
            relations:['details']
        })
    }
    
    async findAll(): Promise<Array<User>> {
        const data = await this.usersModel.find({relations:['details']})
        console.log(data);
        
        return data
    }
}