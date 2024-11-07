import { AgendaService } from "./agenda.service";

describe("AgendaService", () => {
  let service: AgendaService;

  beforeEach(() => {
    service = new AgendaService();
  });

  it("deve retornar as agendas", async () => {
    const result = await service.getAgendas();
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
    const result = await service.getAgendasById({ id: 1 });
    expect(result).toStrictEqual({
      medico: {
        id: 1,
        nome: "Dr. João Silva",
        especialidade: "Cardiologista",
        horarios_disponiveis: ["2024-10-05 09:00", "2024-10-05 10:00"],
      },
    });
  });
});
