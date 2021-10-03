import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdministradorModule } from 'src/administrador/administrador.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [forwardRef(() => AdministradorModule), PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
