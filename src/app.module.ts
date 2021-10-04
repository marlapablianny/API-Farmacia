import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorModule } from './administrador/administrador.module';
import { AuthModule } from './auth/auth.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      "type": "mysql", 
      "host": "localhost", 
      "port": 3306, 
      "username": "marla", 
      "password": "marla", 
      "database": "farmacia", 
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true 
    }),
    AdministradorModule,
    MedicamentosModule,
    ClientesModule,
    AuthModule,
    PedidoModule,
  ],
})
export class AppModule {}
