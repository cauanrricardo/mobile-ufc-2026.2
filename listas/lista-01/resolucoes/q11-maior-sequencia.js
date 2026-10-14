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
  if (valores.length === 0) {
    return { inicio: -1, tamanho: 0, valores: [] };
  }

  let inicioAtual = 0;   // onde começou o trecho que estou olhando agora
  let melhorInicio = 0;  // melhor trecho encontrado até agora
  let melhorTamanho = 1;

  for (let i = 1; i < valores.length; i++) {
    // Se NÃO cresceu, o trecho quebrou: começa um novo trecho em i.
    if (valores[i] <= valores[i - 1]) {
      inicioAtual = i;
    }
    const tamanhoAtual = i - inicioAtual + 1;

    // > (e não >=) garante que em empate fica o PRIMEIRO trecho.
    if (tamanhoAtual > melhorTamanho) {
      melhorTamanho = tamanhoAtual;
      melhorInicio = inicioAtual;
    }
  }

  return {
    inicio: melhorInicio,
    tamanho: melhorTamanho,
    valores: valores.slice(melhorInicio, melhorInicio + melhorTamanho), // cópia
  };

  /* Rastreio de [1, 3, 2, 4, 6, 5]:
     i=1: 3>1 cresce   atual=0 tam=2 -> melhor (0,2)
     i=2: 2<=3 quebra  atual=2 tam=1
     i=3: 4>2 cresce   atual=2 tam=2 (não é > 2)
     i=4: 6>4 cresce   atual=2 tam=3 -> melhor (2,3)
     i=5: 5<=6 quebra  atual=5 tam=1
     resultado: inicio 2, tamanho 3, valores [2, 4, 6]  */
}

// ----------------------------- TESTES -----------------------------
teste("exemplo [1,3,2,4,6,5]", () => maiorSequencia([1, 3, 2, 4, 6, 5]), { inicio: 2, tamanho: 3, valores: [2, 4, 6] });
teste("[7,7,7] (iguais não contam)", () => maiorSequencia([7, 7, 7]), { inicio: 0, tamanho: 1, valores: [7] });
teste("array vazio", () => maiorSequencia([]), { inicio: -1, tamanho: 0, valores: [] });
teste("números negativos", () => maiorSequencia([-1, -5, -3, -2, 0, -4]), { inicio: 1, tamanho: 4, valores: [-5, -3, -2, 0] });
teste("empate entre dois trechos (fica o 1º)", () => maiorSequencia([1, 2, 0, 5, 3]), { inicio: 0, tamanho: 2, valores: [1, 2] });
teste("não altera a entrada", () => preservaEntrada(maiorSequencia, [3, 1, 2]), true);
resumo();
