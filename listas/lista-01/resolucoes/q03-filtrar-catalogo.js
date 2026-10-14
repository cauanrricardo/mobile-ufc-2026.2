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
  .filter(p => p.estoque > 0 && p.preco <= 20)
  .map(p => p.nome);

console.log(nomes);

// Escreva aqui o array que você acha que será exibido:
const minhaResposta =
  ["Caderno", "Regua"];

/* RESPOSTA DISCURSIVA (modelo):

  Resultado: ["Caderno", "Regua"]

  Passo a passo do filter (precisa das DUAS condições verdadeiras):
    Caderno: estoque 3 > 0 (V) && preço 20 <= 20 (V) -> fica
    Caneta : estoque 0 > 0 (F)                        -> sai (o && nem testa o preço)
    Mochila: estoque 2 > 0 (V) && preço 80 <= 20 (F) -> sai
    Regua  : estoque 4 > 0 (V) && preço 8 <= 20 (V)  -> fica

  - filter(): percorre o array e cria um array NOVO só com os elementos
    para os quais a função retorna true. Não altera o original.
  - map(): percorre o array (já filtrado) e cria um array NOVO, do mesmo
    tamanho, com o valor retornado para cada elemento — aqui, só o nome.
  - &&  ("E" lógico): o resultado só é true se os dois lados forem true.
    Se o lado esquerdo for false, o direito nem é avaliado (curto-circuito).
  - A ordem dos elementos é preservada: filter e map mantêm a ordem original.
*/

// ----------------------------- TESTES -----------------------------
teste("conteúdo de nomes", () => minhaResposta, nomes);
resumo();
