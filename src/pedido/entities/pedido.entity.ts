import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    medicamento: string;

    @Column()
    id_fez_pedido:  number;

    @Column({nullable:true})
    id_recebeu_pedido: number;


}
