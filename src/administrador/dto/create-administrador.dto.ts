import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAdministradorDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly endereco: string;

  @IsNotEmpty()
  readonly telephone: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

