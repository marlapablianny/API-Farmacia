import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdministradorModule } from 'src/administrador/administrador.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdministradorService } from 'src/administrador/administrador.service';

@Module({
  imports: [forwardRef(() => AdministradorModule), PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
