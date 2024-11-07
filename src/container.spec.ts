const agendaControllerMock = {
  getAgendas: jest.fn(() => successResponse),
  getAgendasById: jest.fn(() => successResponse),
};

const agendamentoControllerMock = {
  marcarAgendamento: jest.fn(() => successResponse),
};

const successResponse = {
  any: "any",
};

import { getAgendas, getAgendasById, marcarAgendamento } from "./container";

jest.mock("./agenda", () => ({
  AgendaController: jest.fn(() => agendaControllerMock),
  AgendaService: jest.fn(),
}));

jest.mock("./agendamento", () => ({
  AgendamentoController: jest.fn(() => agendamentoControllerMock),
  AgendamentoService: jest.fn(),
}));

describe("Container", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe("container getAgendas", () => {
    it("deve retornar todas as agendas", async () => {
      const result = await getAgendas();

      expect(agendaControllerMock.getAgendas).toHaveBeenCalledTimes(1);
      expect(agendaControllerMock.getAgendas).toHaveBeenCalledWith();
      expect(result).toStrictEqual({
        statusCode: 200,
        body: JSON.stringify(successResponse),
        headers: { "Content-Type": "application/json" },
      });
    });
  });

  describe("container getAgendasById", () => {
    it("deve retornar a agenda pelo id", async () => {
      const params = { id: "1" };
      const result = await getAgendasById({
        queryStringParameters: params,
      } as any);

      expect(agendaControllerMock.getAgendasById).toHaveBeenCalledTimes(1);
      expect(agendaControllerMock.getAgendasById).toHaveBeenCalledWith(
        params.id
      );
      expect(result).toStrictEqual({
        statusCode: 200,
        body: JSON.stringify(successResponse),
        headers: { "Content-Type": "application/json" },
      });
    });
  });

  describe("container marcarAgendamento", () => {
    it("deve retornar um agendamento", async () => {
      const corpo = {
        medico_id: 2,
        paciente_nome: "hayane",
        data_horario: "2024-10-06 15:00",
      };

      const result = await marcarAgendamento({
        body: JSON.stringify(corpo),
      } as any);

      expect(agendamentoControllerMock.marcarAgendamento).toHaveBeenCalledTimes(1);
      expect(agendamentoControllerMock.marcarAgendamento).toHaveBeenCalledWith(corpo);
      expect(result).toStrictEqual({
        statusCode: 200,
        body: JSON.stringify(successResponse),
        headers: { "Content-Type": "application/json" },
      });
    });
  });
});
