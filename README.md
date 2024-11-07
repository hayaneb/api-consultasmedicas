# API Consultas Médicas

Esse projeto é uma API com dois endpoints que permite buscar agendas médicas e realizar agendamento de consulta.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- AWS Lambda (funções serverless)
- API Gateway
- Serverless Framework
- Jest (para testes unitários)
- Prettier e ESLint (para garantir qualidade de código)

## Instruções

1) Clone o repositório

2) Execute `npm i` para instalar as dependências do projeto;

3) Execute `npm start` para rodar o projeto;

4) Execute `npm teste` ou `npm run test:coverage` para os testes unitários.

## Endpoints

### GET /agendas
Retorna uma lista de médicos e horários disponíveis.

**Exemplo de Resposta**
```json
{
  "medicos": [
    {
      "id": 1,
      "nome": "Dr. João Silva",
      "especialidade": "Cardiologista",
      "horarios_disponiveis": [
        "2024-10-05 09:00",
        "2024-10-05 10:00"
        ]
      },
      {
      "id": 2,
      "nome": "Dra. Maria Souza",
      "especialidade": "Dermatologista",
      "horarios_disponiveis": [
        "2024-10-06 14:00",
        "2024-10-06 15:00"
        ]
     }
  ]
}
```

### GET /agendas-id
Retorna os horários disponíveis apenas do médico escolhido.

**Parâmetros:**

id: ID do médico (número inteiro).

**Exemplo de Resposta:**
```json
{
  "medico": {
    "id": 1,
    "nome": "Dr. João Silva",
    "especialidade": "Cardiologista",
    "horarios_disponiveis": [
      "2024-10-05 09:00",
      "2024-10-05 10:00"
      ]
   }
}
```

### POST /agendamento
Permite marcar uma consulta com um médico.

**Exemplo de Payload:**
```json
{
  "medico_id": 2,
  "paciente_nome": "Hayane Brenda",
  "data_horario": "2024-10-06 15:00"
}
```
**Exemplo de Resposta:**
```json
{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "medico": "Dra. Maria Souza",
    "paciente": "Hayane Brenda",
    "data_horario": "2024-10-06 15:00"
  }
}
```
