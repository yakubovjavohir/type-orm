import { Category } from "src/modules/category/entities/category.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("row")
export class Row {
        @PrimaryGeneratedColumn()
        id:number
    
        @Column()
        name:string

        @ManyToOne(() => Category, (category) => category.rows, { onDelete: "CASCADE" }) 
        category: Category;
    
        @CreateDateColumn()
        createdAt: Date;
      
        @UpdateDateColumn()
        updatedAt: Date;
}
