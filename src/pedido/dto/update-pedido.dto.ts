import { IsNotEmpty } from 'class-validator';

export class UpdatePedidoDto {
    @IsNotEmpty()
    readonly recebido: boolean;
}
