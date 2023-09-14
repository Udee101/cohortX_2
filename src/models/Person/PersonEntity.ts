import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ 
        nullable: false, 
        unique: true,
    })
    name: string
}
