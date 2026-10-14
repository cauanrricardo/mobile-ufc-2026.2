// =====================================================================
// Lista I — Questão 05: Resumir um carrinho (L2)
// Retorne { total, quantidadeItens }
//   total           = soma de (preco * quantidade)
//   quantidadeItens = soma das quantidades
// Carrinho vazio -> { total: 0, quantidadeItens: 0 }. Não altere a entrada.
//
// Dica: reduce pode acumular um OBJETO, não só um número.
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function resumirCarrinho(itens) {
  // O acumulador começa como { total: 0, quantidadeItens: 0 }.
  // A cada item, devolvemos um objeto NOVO com os valores somados.
  // Carrinho vazio: o reduce nem roda a função e devolve o valor inicial. 
  return itens.reduce(
    (acc, item) => ({
      total: acc.total + item.preco * item.quantidade,
      quantidadeItens: acc.quantidadeItens + item.quantidade,
    }),
    { total: 0, quantidadeItens: 0 }
  );

  /* Versão com for...of (mais fácil de ler para iniciante):
  let total = 0;
  let quantidadeItens = 0;
  for (const item of itens) {          // for...of: pega cada ITEM do array
    total += item.preco * item.quantidade;
    quantidadeItens += item.quantidade;
  }
  return { total, quantidadeItens };
  */
}

// ----------------------------- TESTES -----------------------------
const itens = [
  { nome: "Caderno", preco: 20, quantidade: 2 },
  { nome: "Caneta", preco: 5, quantidade: 3 },
];
teste("exemplo do enunciado", () => resumirCarrinho(itens), { total: 55, quantidadeItens: 5 });
teste("carrinho vazio", () => resumirCarrinho([]), { total: 0, quantidadeItens: 0 });
teste("um único produto", () => resumirCarrinho([{ nome: "Mochila", preco: 80, quantidade: 1 }]), {
  total: 80,
  quantidadeItens: 1,
});
teste("não altera a entrada", () => preservaEntrada(resumirCarrinho, itens), true);
resumo();
