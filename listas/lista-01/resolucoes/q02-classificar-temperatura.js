// =====================================================================
// Lista I — Questão 02: Classificar temperaturas (L1)
// Use if, else if e else.
//   abaixo de 20        -> "Frio"
//   de 20 até menos de 30 -> "Agradavel"
//   a partir de 30      -> "Quente"
// Cuidado com os LIMITES: 20 já é Agradavel, 30 já é Quente.
// =====================================================================
const { teste, resumo } = require("../teste.js");

function classificarTemperatura(temperatura) {
  // O if para no PRIMEIRO teste verdadeiro, então basta ir subindo as faixas.
  if (temperatura < 20) {
    return "Frio";            // ..., 18, 19
  } else if (temperatura < 30) {
    return "Agradavel";       // 20 até 29.99 (aqui já sabemos que é >= 20)
  } else {
    return "Quente";          // 30, 31, ...
  }
}

// ----------------------------- TESTES -----------------------------
teste("19 -> Frio", () => classificarTemperatura(19), "Frio");
teste("20 -> Agradavel", () => classificarTemperatura(20), "Agradavel");
teste("29 -> Agradavel", () => classificarTemperatura(29), "Agradavel");
teste("30 -> Quente", () => classificarTemperatura(30), "Quente");
teste("-5 -> Frio", () => classificarTemperatura(-5), "Frio");
teste("29.9 -> Agradavel", () => classificarTemperatura(29.9), "Agradavel");
resumo();
