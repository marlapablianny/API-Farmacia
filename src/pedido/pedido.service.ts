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

  create(createPedidoDto: CreatePedidoDto) {
    return this.pedidoRepository.save(createPedidoDto);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  findOne(id: string): Promise<Pedido> {
    return this.pedidoRepository.findOne(id);
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    await this.pedidoRepository.update(id, updatePedidoDto);
  }

  async remove(id: string) {
    await this.pedidoRepository.delete(id);
    
  }

  async Pedidorecebido(id, usuario){
    return this.pedidoRepository.update({id: id,id_recebeu_pedido:null},{id_recebeu_pedido:usuario.id} )

  }
}
