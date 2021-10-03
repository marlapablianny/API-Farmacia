import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;
  
    @Column('text')
    endereco: string;

    @Column()
    telephone: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;
  
    //@Column({ default: true })
    //isActive: boolean;
}
