import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' , passwordField: 'password'});
  }

  async validate(email: string, password: string): Promise<any> {
    const administrador = await this.authService.validateAdministrador(email, password);
    const cliente = await this.authService.validateCliente(email, password);
    const usuario = administrador ?? cliente
    if (!usuario) {
      throw new UnauthorizedException();
    }
    return usuario;
  }
}