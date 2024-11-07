import { AgendaService } from "../service";
import { AgendaController } from "./agenda.controller";

describe("AgendaController", () => {
  let controller: AgendaController;

  beforeEach(() => {
    controller = new AgendaController(new AgendaService());
  });

  it("deve retornar as agendas", async () => {
    const result = await controller.getAgendas();
    expect(result).toStrictEqual({
      medicos: [
        {
          id: 1,
          nome: "Dr. João Silva",
          especialidade: "Cardiologista",
          horarios_disponiveis: ["2024-10-05 09:00", "2024-10-05 10:00"],
        },
        {
          id: 2,
          nome: "Dra. Maria Souza",
          especialidade: "Dermatologista",
          horarios_disponiveis: ["2024-10-06 14:00", "2024-10-06 15:00"],
        },
      ],
    });
  });

  it("deve retornar a agenda pelo id", async () => {
    const result = await controller.getAgendasById("2");
    expect(result).toStrictEqual({
      medico: {
        id: 2,
        nome: "Dra. Maria Souza",
        especialidade: "Dermatologista",
        horarios_disponiveis: ["2024-10-06 14:00", "2024-10-06 15:00"],
      },
    });
  });
});
