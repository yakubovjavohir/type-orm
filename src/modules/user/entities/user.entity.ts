import { UserDetails } from "src/modules/user-details/entities/user-detail.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fullName:string

    @Column()
    email:string

    @Column()
    password:string
    
    @OneToOne(() => UserDetails, (userDetails) => userDetails.user)
    @JoinColumn({ name: "userDetailsId" })
    details: UserDetails;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
