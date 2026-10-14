// =====================================================================
// Lista I — Questão 06: Copiar objetos aninhados (L2)
//
//   const original = { nome: "Ana", endereco: { cidade: "Quixada" } };
//   const copia = { ...original };
//   copia.nome = "Bia";
//   copia.endereco.cidade = "Fortaleza";
//   console.log(original.nome);                       // ?
//   console.log(original.endereco.cidade);            // ?
//   console.log(copia.endereco === original.endereco);// ?
//
// 1) Informe os três valores.  2) Explique.  3) Reescreva "copia" usando
//    spread também em endereco, para o original não mudar.
// =====================================================================
const { teste, resumo } = require("../teste.js");

// 1) Suas respostas para os três console.log:
const respostas = [
  // SEU CÓDIGO AQUI
];

// 3) Função que cria a cópia CORRETA (independente):
function copiarCadastro(original) {
  // SEU CÓDIGO AQUI
}

/* 2) Explique aqui a diferença entre cópia rasa e cópia independente:

*/

// ----------------------------- TESTES -----------------------------
{
  const original = { nome: "Ana", endereco: { cidade: "Quixada" } };
  const copia = { ...original };
  copia.nome = "Bia";
  copia.endereco.cidade = "Fortaleza";
  teste("três valores exibidos", () => respostas, [
    original.nome,
    original.endereco.cidade,
    copia.endereco === original.endereco,
  ]);
}
{
  const original = { nome: "Ana", endereco: { cidade: "Quixada" } };
  teste("cópia correta preserva a cidade original", () => {
    const copia = copiarCadastro(original);
    copia.nome = "Bia";
    copia.endereco.cidade = "Fortaleza";
    return [original.nome, original.endereco.cidade, copia.endereco === original.endereco];
  }, ["Ana", "Quixada", false]);
}
resumo();
