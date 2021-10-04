import { IsNotEmpty } from "class-validator";

export class CreatePedidoDto {

    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly endereço: string;
    
    @IsNotEmpty()
    readonly telefone: string;
}
