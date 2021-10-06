import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class AuthService {
    constructor(
        private clientesService: ClientesService,
        private jwtService: JwtService
        ) {}

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


