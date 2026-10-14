// =====================================================================
// Lista I — Questão 01: Analisar valores (L1)
// Desenvolva analisarValores(valores): recebe um array NÃO vazio de inteiros
// e retorna { maior, quantidadePares }. Não altere a entrada.
// Exemplo: [12, 7, 19, 4, 10] -> { maior: 19, quantidadePares: 3 }
//
// Dicas: Math.max(...array) acha o maior | n % 2 === 0 testa se é par
// Rode:  node <este-arquivo>
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function analisarValores(valores) {
  // SEU CÓDIGO AQUI
}

// ----------------------------- TESTES -----------------------------
teste("exemplo do enunciado", () => analisarValores([12, 7, 19, 4, 10]), { maior: 19, quantidadePares: 3 });
teste("números negativos", () => analisarValores([-5, -2, -9, -4]), { maior: -2, quantidadePares: 2 });
teste("nenhum número par", () => analisarValores([1, 3, 5, 7]), { maior: 7, quantidadePares: 0 });
teste("apenas um elemento", () => analisarValores([8]), { maior: 8, quantidadePares: 1 });
teste("não altera a entrada", () => preservaEntrada(analisarValores, [3, 1, 2]), true);
resumo();
