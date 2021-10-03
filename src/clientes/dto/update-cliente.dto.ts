import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    readonly name: string;
    readonly endereco: string;
    readonly telephone: string;
    readonly email: string;
    readonly password: string;
   
}
