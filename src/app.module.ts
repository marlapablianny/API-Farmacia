import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { Connection } from 'typeorm';
import { AdministradorModule } from './administrador/administrador.module';
//import { ProdutosModule } from './produtos/produtos.module';
//import { AdministradorController } from './administrador/administrador.controller.  .ts';
import { AuthModule } from './auth/auth.module';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { ClientesModule } from './clientes/clientes.module';
import { AdministradorService } from './administrador/administrador.service';

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
    // AdministradorService
  ],
})

//@Module({
  //imports: [AdministradorModule, ProdutosModule, ClientesModule],
  //controllers: [AppController],
  //providers: [AppService],
//})
export class AppModule {}
