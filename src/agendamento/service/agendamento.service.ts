import { medicosExternal, IMedico } from "../../mocks";
import { AppError } from "../../utils";
import { AgendamentoDTo } from "../dto";
import { AgendamentoResponse } from "../interface";

export class AgendamentoService {
  private medicos: IMedico[];

  constructor() {
    this.medicos = medicosExternal;
  }

  async marcarAgendamento(agendamento: AgendamentoDTo): Promise<AgendamentoResponse> {
    const medico = this.medicos.find(medico => medico.id === agendamento.medico_id)
    
    if(!medico) {
      throw new AppError("Médico não encontrado", 404)
    }

    if(!medico.horarios_disponiveis.includes(agendamento.data_horario)) {
      throw new AppError("Horário não encontrado", 404)
    }

    return {
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: medico.nome,
        paciente: agendamento.paciente_nome,
        data_horario: agendamento.data_horario,
      },
    };
  }
}