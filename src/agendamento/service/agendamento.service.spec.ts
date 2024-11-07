import { AgendamentoDTo } from "../dto";
import { AgendamentoService } from "./agendamento.service";

describe("AgendamentoService", () => {
  let service: AgendamentoService;

  beforeEach(() => {
    service = new AgendamentoService();
  });

  it("deve retornar um agendamento", async () => {
    const result = await service.marcarAgendamento({
      medico_id: 1,
      paciente_nome: "hayane",
      data_horario: "2024-10-05 09:00",
    });
    expect(result).toStrictEqual({
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: "Dr. João Silva",
        paciente: "hayane",
        data_horario: "2024-10-05 09:00",
      },
    });
  });
});
