import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdministradorService } from 'src/administrador/administrador.service';

@Injectable()
export class AuthService {
    constructor(
        private administradorService: AdministradorService,
        private jwtService: JwtService
        ) {}

    async validateAdministrador(email: string, password: string): Promise<any> {
        const administrador = await this.administradorService.findOneByEmail(email);
        if(administrador && administrador.password == password) {
            const { password,email, ...rest } = administrador 
            return rest;
        }
        return null;
    }

    async login(administrador: any) {
        const payload = {email: administrador.email, sub:  administrador.administradorId};
        return{
            access_token: this.jwtService.sign(payload),
        };
    }
}


