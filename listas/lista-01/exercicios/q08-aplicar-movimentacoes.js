// =====================================================================
// Lista I — Questão 08: Aplicar movimentações de estoque (L2)
// Cada movimentação { id, delta } soma delta à quantidade do produto.
// Processe EM ORDEM. Se o id não existir OU o saldo ficar negativo,
// ignore só essa movimentação e conte +1 rejeitada.
// Retorne { produtos, rejeitadas } com NOVOS objetos de produto,
// na ordem original. Não altere as entradas.
//
// Dica: comece copiando os produtos com map + spread. Depois percorra as
// movimentações e use find() para achar o produto pelo id.
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function aplicarMovimentacoes(estoque, movimentacoes) {
  function aplicarMovimentacoes(estoque, movimentacoes) {
    // 1. Cópia dos produtos: mexer nas cópias não altera o estoque original.
    const produtos = estoque.map((p) => ({ ...p }));

    let rejeitadas = 0;

    // 2. Para cada movimentação, na ordem em que aparecem.
    for (const mov of movimentacoes) {
      // 3. Procurar o produto com o mesmo id.
      let alvo = undefined;
      for (const p of produtos) {
        if (p.id === mov.id) {
          alvo = p; // achou: guarda o produto
        }
      }

      // 4. Id não existe: rejeita e vai para a próxima movimentação.
      if (alvo === undefined) {
        rejeitadas = rejeitadas + 1;
      }
      // 5. Saldo ficaria negativo: rejeita, sem mexer na quantidade.
      else if (alvo.quantidade + mov.delta < 0) {
        rejeitadas = rejeitadas + 1;
      }
      // 6. Caso normal: aplica o delta na cópia.
      else {
        alvo.quantidade = alvo.quantidade + mov.delta;
      }
    }

    return { produtos: produtos, rejeitadas: rejeitadas };
  }
}

// ----------------------------- TESTES -----------------------------
const estoque = [
  { id: 1, nome: "Caderno", quantidade: 5 },
  { id: 2, nome: "Caneta", quantidade: 2 },
];
const movimentacoes = [
  { id: 1, delta: -3 }, // Caderno 5 -> 2
  { id: 2, delta: -4 }, // Caneta 2 - 4 = -2  -> REJEITADA
  { id: 1, delta: 2 }, // Caderno 2 -> 4
  { id: 9, delta: 1 }, // id 9 não existe     -> REJEITADA
];
teste(
  "exemplo do enunciado",
  () => aplicarMovimentacoes(estoque, movimentacoes),
  {
    produtos: [
      { id: 1, nome: "Caderno", quantidade: 4 },
      { id: 2, nome: "Caneta", quantidade: 2 },
    ],
    rejeitadas: 2,
  },
);
teste("entradas vazias", () => aplicarMovimentacoes([], []), {
  produtos: [],
  rejeitadas: 0,
});
teste(
  "reduz exatamente a zero (é permitido)",
  () =>
    aplicarMovimentacoes(
      [{ id: 1, nome: "Lápis", quantidade: 3 }],
      [{ id: 1, delta: -3 }],
    ),
  {
    produtos: [{ id: 1, nome: "Lápis", quantidade: 0 }],
    rejeitadas: 0,
  },
);
teste(
  "não altera as entradas",
  () => preservaEntrada(aplicarMovimentacoes, estoque, movimentacoes),
  true,
);
resumo();
