import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly email: string;
    readonly password: string;
   
}
