import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administrador {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    nome: string;
  
    @Column('text')
    endereco: string;

    @Column()
    telefone: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;
  
    //@Column({ default: true })
    //isActive: boolean;
}
