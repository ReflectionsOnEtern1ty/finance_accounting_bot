import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class example_text extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text',
        nullable: true,
    })
    text_value: string
}