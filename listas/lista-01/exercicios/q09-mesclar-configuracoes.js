// =====================================================================
// Lista I — Questão 09: Mesclar configurações (L3) — a mais difícil
// construirConfiguracao(padrao, ...camadas) com rest e spread:
//   - aplica as camadas em ordem: o ÚLTIMO valor definido vence
//   - ignora valores undefined (inclusive dentro de conexao)
//   - mescla os campos de conexao
//   - junta os plugins SEM repetir, na ordem da primeira aparição
//   - não altera as entradas; conexao e plugins do retorno são cópias novas
//
// Dicas:
//   ...camadas (nos parâmetros) = REST: junta os argumentos extras num array
//   { ...a, ...b }              = SPREAD: b sobrescreve a
//   [...new Set(lista)]         = remove repetidos mantendo a ordem
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function construirConfiguracao(padrao, ...camadas) {
  // SEU CÓDIGO AQUI
}

// ----------------------------- TESTES -----------------------------
const padrao = { tema: "claro", conexao: { timeout: 1000, tentativas: 2 }, plugins: ["log"] };
const camada = { tema: "escuro", conexao: { timeout: 3000 }, plugins: ["cache", "log"] };

teste("exemplo do enunciado", () => construirConfiguracao(padrao, camada), {
  tema: "escuro",
  conexao: { timeout: 3000, tentativas: 2 },
  plugins: ["log", "cache"],
});
teste("nenhuma camada (só o padrão)", () => construirConfiguracao(padrao), {
  tema: "claro",
  conexao: { timeout: 1000, tentativas: 2 },
  plugins: ["log"],
});
teste("várias camadas (a última vence)", () =>
  construirConfiguracao(
    padrao,
    { tema: "escuro", plugins: ["cache"] },
    { tema: "azul", conexao: { tentativas: 5 }, plugins: ["auth", "log"] }
  ), {
  tema: "azul",
  conexao: { timeout: 1000, tentativas: 5 },
  plugins: ["log", "cache", "auth"],
});
teste("undefined é ignorado (inclusive em conexao)", () =>
  construirConfiguracao(padrao, { tema: undefined, conexao: { timeout: undefined, tentativas: 9 } }), {
  tema: "claro",
  conexao: { timeout: 1000, tentativas: 9 },
  plugins: ["log"],
});
teste("cópias independentes", () => {
  const r = construirConfiguracao(padrao, camada);
  r.conexao.timeout = 1;
  r.plugins.push("hack");
  return [r.conexao !== padrao.conexao, padrao.conexao.timeout, padrao.plugins];
}, [true, 1000, ["log"]]);
teste("não altera as entradas", () => preservaEntrada(construirConfiguracao, padrao, camada), true);
resumo();
