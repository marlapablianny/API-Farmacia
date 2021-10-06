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

    @IsNotEmpty()
    readonly id_fez_pedido: number;
    
    @IsNotEmpty()
    readonly id_recebeu_pedido: number;
    
}
