import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ){}

  create( createPedidoDto: CreatePedidoDto) {
    return this.pedidoRepository.save(createPedidoDto);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  findOne(criterio: any): Promise<Pedido> {
    return this.pedidoRepository.findOne(criterio);
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    await this.pedidoRepository.update(id, updatePedidoDto);
  }

  async remove(id: number) {
    await this.pedidoRepository.delete(id);
  }

  async pedidoRecebido(idPedido, idCliente: number){
    return this.update(idPedido, {recebido: true})
  }
}
