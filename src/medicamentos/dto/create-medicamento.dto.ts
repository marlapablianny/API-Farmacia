import {IsNotEmpty } from 'class-validator';

export class CreateMedicamentoDto {
    @IsNotEmpty()
    readonly name_medicamento: string;

    @IsNotEmpty()
    readonly valor: string;

    @IsNotEmpty()
    readonly descricao: string;

    @IsNotEmpty()
    readonly quantidade: string;
}
