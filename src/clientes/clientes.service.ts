import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    return this.clientesRepository.save(createClienteDto);
  }

  findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  findOne(id: string): Promise<Cliente>{
    return this.clientesRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<Cliente>{
    return this.clientesRepository.findOne({ where: { email } });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    await this.clientesRepository.update(id,updateClienteDto);
  }

  async remove(id: string): Promise<void> {
    await this.clientesRepository.delete(id);
  }
}
