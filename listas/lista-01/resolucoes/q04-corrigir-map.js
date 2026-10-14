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

const dobrar = valores => {
  return valores.map(valor => valor * 2);
};

/* RESPOSTA DISCURSIVA (modelo):

  Resultado atual: undefined.

  Erro 1 — função passada ao map: tem chaves { } e não tem return.
    Arrow com { } precisa de return explícito; sem ele, retorna undefined.
    Então o map geraria [undefined, undefined, undefined].

  Erro 2 — função dobrar: também tem { } e não tem return.
    O array criado pelo map é jogado fora, e dobrar retorna undefined.
    É por isso que o console mostra undefined.

  Correção (duas formas equivalentes):
    const dobrar = valores => valores.map(valor => valor * 2);   // retorno implícito

    const dobrar = valores => {
      return valores.map(valor => {
        return valor * 2;
      });
    };

  O array original não muda porque map() cria um array NOVO.
*/

// ----------------------------- TESTES -----------------------------
teste("dobrar([2, 4, 6])", () => dobrar([2, 4, 6]), [4, 8, 12]);
teste("array vazio", () => dobrar([]), []);
teste("não altera a entrada", () => preservaEntrada(dobrar, [1, 2, 3]), true);
resumo();
