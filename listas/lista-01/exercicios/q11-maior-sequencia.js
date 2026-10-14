// =====================================================================
// Lista I — Questão 11: Maior sequência crescente (L2)
// Retorne o maior trecho de elementos CONSECUTIVOS em que cada número é
// maior que o anterior: { inicio, tamanho, valores }.
//   [1, 3, 2, 4, 6, 5] -> { inicio: 2, tamanho: 3, valores: [2, 4, 6] }
//   [7, 7, 7]          -> { inicio: 0, tamanho: 1, valores: [7] }
//   []                 -> { inicio: -1, tamanho: 0, valores: [] }
// Empate: o PRIMEIRO trecho. Não altere a entrada.
//
// Dica: guarde onde o trecho ATUAL começou e o MELHOR até agora.
// array.slice(inicio, fim) copia um pedaço (fim não incluso).
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function maiorSequencia(valores) {
  // SEU CÓDIGO AQUI
}

// ----------------------------- TESTES -----------------------------
teste("exemplo [1,3,2,4,6,5]", () => maiorSequencia([1, 3, 2, 4, 6, 5]), { inicio: 2, tamanho: 3, valores: [2, 4, 6] });
teste("[7,7,7] (iguais não contam)", () => maiorSequencia([7, 7, 7]), { inicio: 0, tamanho: 1, valores: [7] });
teste("array vazio", () => maiorSequencia([]), { inicio: -1, tamanho: 0, valores: [] });
teste("números negativos", () => maiorSequencia([-1, -5, -3, -2, 0, -4]), { inicio: 1, tamanho: 4, valores: [-5, -3, -2, 0] });
teste("empate entre dois trechos (fica o 1º)", () => maiorSequencia([1, 2, 0, 5, 3]), { inicio: 0, tamanho: 2, valores: [1, 2] });
teste("não altera a entrada", () => preservaEntrada(maiorSequencia, [3, 1, 2]), true);
resumo();
