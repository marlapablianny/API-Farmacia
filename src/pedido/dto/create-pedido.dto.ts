import { IsNotEmpty } from "class-validator";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Medicamento } from "src/medicamentos/entities/medicamento.entity";

export class CreatePedidoDto {
    @IsNotEmpty()
    readonly cliente: Cliente;
    
    @IsNotEmpty()
    readonly medicamento: Medicamento;
}
