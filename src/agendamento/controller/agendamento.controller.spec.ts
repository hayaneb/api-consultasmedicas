import { AgendamentoService } from "../service";
import { AgendamentoController } from "./agendamento.controller";

describe("AgendamentoController", () => {
  let controller: AgendamentoController;

  beforeEach(() => {
    controller = new AgendamentoController(new AgendamentoService());
  });

  it("deve retornar um agendamento", async () => {
    const result = await controller.marcarAgendamento({
      medico_id: 2,
      paciente_nome: "hayane",
      data_horario: "2024-10-06 15:00",
    });
    expect(result).toStrictEqual({
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: "Dra. Maria Souza",
        paciente: "hayane",
        data_horario: "2024-10-06 15:00",
      },
    });
  });
});
