import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { CreateMedicamentoDto } from './dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from './dto/update-medicamento.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('medicamentos')
export class MedicamentosController {
  constructor(private readonly medicamentosService: MedicamentosService) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createMedicamentoDto: CreateMedicamentoDto) {
    return this.medicamentosService.create(createMedicamentoDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.medicamentosService.findAll();
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') params) {
    return this.medicamentosService.findOne(params.id);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicamentoDto: UpdateMedicamentoDto) {
    return this.medicamentosService.update(+id, updateMedicamentoDto);
  }
  
  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicamentosService.remove(id);
  }
}
