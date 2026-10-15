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
  function maiorSequencia(valores) {
    // Caso vazio: não existe sequência.
    if (valores.length === 0) {
      return { inicio: -1, tamanho: 0, valores: [] };
    }

    let melhorInicio = 0; // melhor sequência encontrada até agora
    let melhorTamanho = 1; // começa em 1: qualquer array não vazio tem pelo menos 1
    let inicioAtual = 0; // onde a sequência que estou olhando começou
    let tamanhoAtual = 1; // quantos elementos ela tem até agora

    for (let i = 1; i < valores.length; i++) {
      if (valores[i] > valores[i - 1]) {
        // Continua crescendo: a sequência atual aumenta.
        tamanhoAtual = tamanhoAtual + 1;
      } else {
        // Não cresceu: uma nova sequência começa neste i.
        inicioAtual = i;
        tamanhoAtual = 1;
      }

      // Se a atual ficou maior que a melhor, ela vira a melhor.
      // Usamos ">" (e não ">="): em empate, fica a primeira.
      if (tamanhoAtual > melhorTamanho) {
        melhorTamanho = tamanhoAtual;
        melhorInicio = inicioAtual;
      }
    }

    return {
      inicio: melhorInicio,
      tamanho: melhorTamanho,
      valores: valores.slice(melhorInicio, melhorInicio + melhorTamanho),
    };
  }
}

// ----------------------------- TESTES -----------------------------
teste("exemplo [1,3,2,4,6,5]", () => maiorSequencia([1, 3, 2, 4, 6, 5]), {
  inicio: 2,
  tamanho: 3,
  valores: [2, 4, 6],
});
teste("[7,7,7] (iguais não contam)", () => maiorSequencia([7, 7, 7]), {
  inicio: 0,
  tamanho: 1,
  valores: [7],
});
teste("array vazio", () => maiorSequencia([]), {
  inicio: -1,
  tamanho: 0,
  valores: [],
});
teste("números negativos", () => maiorSequencia([-1, -5, -3, -2, 0, -4]), {
  inicio: 1,
  tamanho: 4,
  valores: [-5, -3, -2, 0],
});
teste(
  "empate entre dois trechos (fica o 1º)",
  () => maiorSequencia([1, 2, 0, 5, 3]),
  { inicio: 0, tamanho: 2, valores: [1, 2] },
);
teste(
  "não altera a entrada",
  () => preservaEntrada(maiorSequencia, [3, 1, 2]),
  true,
);
resumo();
