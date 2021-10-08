import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidoModule } from './pedido/pedido.module';
import { ConfigModule } from '@nestjs/config';
import { boolean } from 'boolean';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({ 
        "type": 'mysql', 
        "host": process.env.TYPEORM_HOST,
        "port": parseInt(process.env.TYPEORM_PORT), 
        //"username": process.env.TYPEORM_USERNAME, 
        //"password": process.env.TYPEORM_PASSWORD, 
        //"database": process.env.TYPEORM_DATABASE, 
        //"entities": ["dist/**/*.entity{.ts,.js}"],
        //"synchronize": boolean(process.env.TYPEORM_SYNCHRONIZE)
      })
    }),
    MedicamentosModule,
    ClientesModule,
    AuthModule,
    PedidoModule,
  ],
})
export class AppModule {}
