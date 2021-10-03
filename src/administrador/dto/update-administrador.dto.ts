import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorDto } from './create-administrador.dto';

export class UpdateAdministradorDto extends PartialType(CreateAdministradorDto) {
    readonly name: string;
    readonly endereco: string;
    readonly telephone: string;
    readonly email: string;
    readonly password: string;

   
}
