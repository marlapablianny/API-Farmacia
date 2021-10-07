import { Cliente } from "src/clientes/entities/cliente.entity";
import { Medicamento } from "src/medicamentos/entities/medicamento.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'cliente_id'})
    cliente: Cliente;
    
    @Column({ name: 'cliente_id' })
    idCliente: number;
    
    @ManyToOne(() => Medicamento)
    @JoinColumn({ name: 'medicamento_id' })
    medicamento: Medicamento;

    @Column({ name: 'medicamento_id' })
    idMedicamento: number;

    @CreateDateColumn()
    data: Date;

    @Column({default: false})
    recebido: boolean;
}
