// =====================================================================
// Lista I — Questão 03: Filtrar um catálogo (L1) — questão de ANÁLISE
// 1) Escreva o conteúdo de "nomes" (na ordem).
// 2) Explique a função de filter(), map() e do operador &&.
// Tente responder no papel ANTES de rodar!
// =====================================================================
const { teste, resumo } = require("../teste.js");

const produtos = [
  { nome: "Caderno", preco: 20, estoque: 3 },
  { nome: "Caneta", preco: 5, estoque: 0 },
  { nome: "Mochila", preco: 80, estoque: 2 },
  { nome: "Regua", preco: 8, estoque: 4 },
];

const nomes = produtos
  .filter((p) => p.estoque > 0 && p.preco <= 20)
  .map((p) => p.nome);

console.log(nomes);

// Escreva aqui o array que você acha que será exibido:
const minhaResposta = ["Caderno", "Regua"]; // <- coloque os nomes aqui, ex.: ["Nome1", "Nome2"]

/* Explique aqui filter(), map() e &&:
filter mantém os produtos que passam na condição, 
e map transforma cada um no seu nome. 
O && exige que as duas condições sejam verdadeiras, e avalia a segunda só se a primeira for verdadeira.
*/

// ----------------------------- TESTES -----------------------------
teste("conteúdo de nomes", () => minhaResposta, nomes);
resumo();
