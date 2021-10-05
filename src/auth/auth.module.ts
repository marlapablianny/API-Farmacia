import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdministradorModule } from 'src/administrador/administrador.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ClientesService } from 'src/clientes/clientes.service';
import { ClientesModule } from 'src/clientes/clientes.module';

@Module({
  imports: [forwardRef(() => AdministradorModule), ClientesModule, PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2 days'},
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
