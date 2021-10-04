import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

}
