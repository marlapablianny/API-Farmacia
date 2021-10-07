import { Controller, Get, UseGuards, Post, Body, Patch, Param, Delete, Request, NotFoundException, BadRequestException } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { validate } from 'class-validator';
import { ClientesService } from 'src/clientes/clientes.service';
import { MedicamentosService } from 'src/medicamentos/medicamentos.service';
import { UpdateMedicamentoDto } from 'src/medicamentos/dto/update-medicamento.dto';
import { CreateMedicamentoDto } from 'src/medicamentos/dto/create-medicamento.dto';

@Controller('pedido')
export class PedidoController {
  constructor(
    private readonly pedidoService: PedidoService, 
    private readonly clientesService: ClientesService,
    private readonly medicamentosService: MedicamentosService) {}
  
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() {idMedicamento}: any, @Request() request: any) {
    const idCliente = request.user.id
    const cliente = await this.clientesService.findOne(idCliente);
    const medicamento = await this.medicamentosService.findOne(idMedicamento);
    
    if (!medicamento) { 
      throw new NotFoundException('Medicamento não encontrado');
    }

    if (!medicamento.quantidade) {
      throw new BadRequestException('Medicamento indisponível')
    }
    
    const quantidate = medicamento.quantidade - 1;
    await this.medicamentosService.update(medicamento.id, {...medicamento, quantidade: quantidate})
    await this.pedidoService.create({cliente, medicamento});
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
  update(@Param('id') id: number, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pedidoService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('recebido/:id')
  async receberpedido(@Request() req: any, @Param('id') id){
    const pedido = await this.pedidoService.findOne({
      where: { id, idCliente: req.user.id, recebido: false}
    });
    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }
    return this.pedidoService.pedidoRecebido(pedido.id, req.user.id);
  }
}
