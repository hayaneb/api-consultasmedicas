export function createResponse(statusCode: number, response: any) {
  return {
    statusCode,
    body: JSON.stringify(response),
    headers: { "Content-Type": "application/json" },
  };
}

export function createErrorResponse(error: any) {
  const mensagem = error instanceof Error ? error.message : "Erro desconhecido";

  return createResponse(error.code, { mensagem });
}