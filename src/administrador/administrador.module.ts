import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { Administrador } from './entities/administrador.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthModuleOptions } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Administrador]), AdministradorModule],
  controllers: [AdministradorController],
  providers: [AdministradorService],
  exports: [AdministradorService]
})
export class AdministradorModule {}
