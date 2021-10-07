import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medicamento } from './entities/medicamento.entity';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';

@Injectable()
export class MedicamentosService {
constructor(
  @InjectRepository(Medicamento)
  private medicamentosRepository: Repository<Medicamento>,
) {}

  create(createMedicamentoDto: CreateMedicamentoDto) {
    return this.medicamentosRepository.save(createMedicamentoDto);
  }

  findAll(): Promise<Medicamento[]> {
    return this.medicamentosRepository.find();
  }

  findOne(id: number): Promise<Medicamento> {
    return this.medicamentosRepository.findOne(id);
  }

  async update(id: number, updateMedicamentoDto: UpdateMedicamentoDto) {
    await this.medicamentosRepository.update(id,updateMedicamentoDto);
  }

  async remove(id: string): Promise<void> {
    await this.medicamentosRepository.delete(id);
  }
}
