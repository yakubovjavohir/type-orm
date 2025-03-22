import { Row } from "src/modules/row/entities/row.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany(() => Row, (row) => row.category, { cascade: true })
    rows: Row[];

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
