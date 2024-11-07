import { IMedico } from "../../mocks";

export interface AgendaResponse {
  medicos: IMedico[];
}

export interface AgendaIdResponse {
  medico: IMedico;
}
