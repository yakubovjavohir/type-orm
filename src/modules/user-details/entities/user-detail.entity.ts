import { User } from "src/modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users_details")
export class UserDetails {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    phone:string

    @OneToOne(() => User, (user) => user.details)
    user: User;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
