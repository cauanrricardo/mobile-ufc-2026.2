// =====================================================================
// Lista I — Questão 04: Corrigir os retornos de map() (L1)
// Código com bug:
//
//   const dobrar = valores => {
//     valores.map(valor => {
//       valor * 2;
//     });
//   };
//   console.log(dobrar([2, 4, 6]));   // mostra undefined
//
// 1) Explique o resultado atual.  2) Corrija para retornar [4, 8, 12]
//    sem alterar o array recebido.
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

const dobrar = (valores) => {
  return valores.map((valor) => {
    return valor * 2;
  });
};
console.log(dobrar([2, 4, 6]));

/* Explique aqui por que o resultado atual é undefined:
pois o map sem o return o resultado eh undifined
*/

// ----------------------------- TESTES -----------------------------
teste("dobrar([2, 4, 6])", () => dobrar([2, 4, 6]), [4, 8, 12]);
teste("array vazio", () => dobrar([]), []);
teste("não altera a entrada", () => preservaEntrada(dobrar, [1, 2, 3]), true);
resumo();
