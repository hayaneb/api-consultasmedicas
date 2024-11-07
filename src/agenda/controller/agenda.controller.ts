import { AgendaService } from "../service";
import { AgendaDTo } from "../dto";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { AppError } from "../../utils";

export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  async getAgendas() {
    return await this.agendaService.getAgendas();
  }

  async getAgendasById(agendaId?: string) {
    const agendaDTO = plainToInstance(AgendaDTo, {id: agendaId ? Number(agendaId) : null});
    
    await validate(agendaDTO).then((errors) => {
      if (errors.length > 0) {
        throw new AppError ("ID inválido", 400);
      }
    });

    return await this.agendaService.getAgendasById(agendaDTO);
  }
}
