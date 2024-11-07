import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { AgendamentoDTo } from "../dto";
import { AgendamentoService } from "../service";
import { AppError } from "../../utils";

export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  async marcarAgendamento(agendamento: AgendamentoDTo) {
    const agendamentoDTO = plainToInstance(AgendamentoDTo, agendamento);

    await validate(agendamentoDTO).then((errors) => {
      if (errors.length > 0) {
      throw new AppError("Dados inválidos", 400);
    }
    });
    
    return await this.agendamentoService.marcarAgendamento(agendamento);
  }
}
