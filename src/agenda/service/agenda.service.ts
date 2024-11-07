import { medicosExternal, IMedico } from "../../mocks";
import { AgendaResponse, AgendaIdResponse } from "../interface";
import { AgendaDTo } from "../dto";
import { AppError } from "../../utils/app.error";

export class AgendaService {
  private medicos: IMedico[];

  constructor() {
    this.medicos = medicosExternal;
  }

  async getAgendas(): Promise<AgendaResponse> {
    return {
      medicos: this.medicos,
    };
  }

  async getAgendasById(agendaId: AgendaDTo): Promise<AgendaIdResponse>{
    const medico = this.medicos.find((medico) => medico.id ===  agendaId.id)
    
    if(!medico) {
      throw new AppError("Médico não encontrado", 404)
    }
    return {
      medico
    };
  }
}
