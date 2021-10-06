import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    readonly nome: string;
    readonly endereço: string;
    readonly telefone: string;
    readonly medicamento: string;
    readonly id_fez_pedido: number;
    readonly id_recebeu_pedido: number;

}
