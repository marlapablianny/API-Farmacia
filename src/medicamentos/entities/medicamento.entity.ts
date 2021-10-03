import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Medicamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_medicamento: string;

    @Column()
    valor: string;

    @Column()
    descricao: string;

    @Column()
    quantidade: string;
}
