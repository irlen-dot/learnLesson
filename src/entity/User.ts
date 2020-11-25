//Указывает, должна ли схема базы данных создаваться автоматически при каждом запуске приложения.
//logging server messages
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity { //It extends the base entity, which allows us to use user.find or user.create

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column("text", { unique: true })
    email: string;

    @Column()
    password: string;

}