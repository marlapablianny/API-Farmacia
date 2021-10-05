import { IsNotEmpty } from "class-validator";

export class CreatePedidoDto {
    @IsNotEmpty()
    readonly nome: string;
    
    @IsNotEmpty()
    readonly endereco: string;
    
    @IsNotEmpty()
    readonly telefone: string;

    @IsNotEmpty()
    readonly medicamento: string;
}
