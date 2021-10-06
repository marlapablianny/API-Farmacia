import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicamentoDto } from './create-medicamento.dto';

export class UpdateMedicamentoDto extends PartialType(CreateMedicamentoDto) {
    readonly nome_medicamento: string;
    readonly valor: string;
    readonly descricao: string;
    readonly quantidade: number;
}
