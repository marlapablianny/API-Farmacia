import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entities/administrador.entity'
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ) {}

  create(createAdministradorDto: CreateAdministradorDto) {
    return this.administradorRepository.save(createAdministradorDto);
    
  }

  findAll(): Promise<Administrador[]> {
    return this.administradorRepository.find();
  }

  findOne(id: string): Promise<Administrador>{
    return this.administradorRepository.findOne(id);
  }

  async update(id: string, updateAdministradorDto: UpdateAdministradorDto) {
    await this.administradorRepository.update(id,updateAdministradorDto);
  }

  async remove(id: string): Promise<void> {
    await this.administradorRepository.delete(id);
  }
}
