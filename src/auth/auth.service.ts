import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdministradorService } from 'src/administrador/administrador.service';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class AuthService {
    constructor(
        private administradorService: AdministradorService,
        private clientesService: ClientesService,
        private jwtService: JwtService
        ) {}

    async validateAdministrador(email: string, password: string): Promise<any> {
        const administrador = await this.administradorService.findOneByEmail(email);
        if(administrador && administrador.password == password) {
            const { password,...rest } = administrador 
            return rest;
        }
        return null;
    }

    async validateCliente(email: string, password: string): Promise<any> {
        const cliente = await this.clientesService.findOneByEmail(email);
        if(cliente && cliente.password == password) {
            const { password, ...rest } = cliente;
            return rest;
        }
        return null;
    }

    async loginUsuario(usuario: any) {
        const payload = { email: usuario.email, id: usuario.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}


