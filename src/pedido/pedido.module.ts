import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { ClientesService } from 'src/clientes/clientes.service';
import { ClientesModule } from 'src/clientes/clientes.module';
import { MedicamentosModule } from 'src/medicamentos/medicamentos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido]), PedidoModule, ClientesModule, MedicamentosModule],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
