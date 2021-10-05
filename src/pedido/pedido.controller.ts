import { Controller, Get, UseGuards, Post, Body, Patch, Param, Delete, Request, NotFoundException, BadRequestException } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { validate } from 'class-validator';
import { ClientesService } from 'src/clientes/clientes.service';
import { MedicamentosService } from 'src/medicamentos/medicamentos.service';

@Controller('pedido')
export class PedidoController {
  constructor(
    private readonly pedidoService: PedidoService, 
    private readonly clientesService: ClientesService,
    private readonly medicamentosService: MedicamentosService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async create(@Body() createPedidoDto: CreatePedidoDto, @Request() req: any, @Param('id') id) {
    const usuario = await this.clientesService.findOneByEmail(req.user.email);
    console.log(usuario);
    const medicamento = await this.medicamentosService.findOne(id);
    console.log(medicamento);

    if (!medicamento) { 
      throw new NotFoundException('Medicamento não encontrado');
    }

    if (!medicamento.quantidade) {
      throw new BadRequestException('Medicamento indisponível')
    }

    return this.pedidoService.create({nome: usuario.nome, endereco: usuario.endereco, telefone: usuario.telefone, medicamento: medicamento.nome_medicamento});
    //quantidade =  medicamento.quantidade-1

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') params) {
    return this.pedidoService.findOne(params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoService.remove(id);
  }
}
