import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AgendamentoDTo {
  @IsNotEmpty()
  @IsNumber()
  medico_id!: number;

  @IsNotEmpty()
  @IsString()
  paciente_nome!: string;

  @IsNotEmpty()
  @IsString()
  data_horario!: string;
}
