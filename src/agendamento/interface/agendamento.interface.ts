export interface AgendamentoResponse {
  mensagem: "Agendamento realizado com sucesso";
  agendamento: {
    medico: string;
    paciente: string;
    data_horario: string;
  };
}
