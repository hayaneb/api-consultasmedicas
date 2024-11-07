import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { AgendaController, AgendaService } from "./agenda";
import { AgendamentoService, AgendamentoController } from "./agendamento";
import { createResponse, createErrorResponse, AppError } from "./utils";

class Container {
  private static readonly agendaController = new AgendaController(
    new AgendaService()
  );

  private static readonly agendamentoController = new AgendamentoController(
    new AgendamentoService()
  );

  async getAgendas(): Promise<APIGatewayProxyResult> {
    try {
      const response = await Container.agendaController.getAgendas();
      return createResponse(200, response);

    } catch (error) {
      return createErrorResponse(error);
    }
  }

  async getAgendasById({
    queryStringParameters,
  }: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const response = await Container.agendaController.getAgendasById(queryStringParameters?.id);
      return createResponse(200, response);

    } catch (error) {
      return createErrorResponse(error);
    }
  }

  async marcarAgendamento({
    body,
  }: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      if (!body) {
        throw new AppError("Corpo da requisição ausente", 400);
      }

      const agendamento =
        await Container.agendamentoController.marcarAgendamento(
          JSON.parse(body)
        );
      return createResponse(200, agendamento);
      
    } catch (error) {
      return createErrorResponse(error);
    }
  }
}

export const { getAgendas, getAgendasById, marcarAgendamento } =
  new Container();
