import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    nome: string;
  
    @Column('text')
    endereco: string;

    @Column()
    telefone: string;

    @Column({unique: true})
    email: string;

    @Column('text')
    password: string;
  
    //@Column({ default: true })
    //isActive: boolean;
}
