import { Injectable } from '@nestjs/common';
import { AdministradorService } from 'src/administrador/administrador.service';

@Injectable()
export class AuthService {
    constructor(
        private administradorService: AdministradorService,
        ) {}

    async validateAdministrador(email: string, password: string): Promise<any> {
        const administrador = await this.administradorService.findOneByEmail(email);
        if(administrador && administrador.password == password) {
            const { password, ...rest } = administrador 
            return rest;
        }
        return null;
    }
}


