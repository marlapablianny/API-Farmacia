import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
    
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  readonly endereco: string;

  @IsNotEmpty()
  readonly telefone: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

