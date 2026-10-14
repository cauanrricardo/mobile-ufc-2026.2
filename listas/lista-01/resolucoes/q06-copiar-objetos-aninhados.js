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
  "Ana", "Fortaleza", true,
];

// 3) Função que cria a cópia CORRETA (independente):
function copiarCadastro(original) {
  return {
    ...original,                         // copia nome (e o resto) — nível de fora
    endereco: { ...original.endereco },  // cria um endereco NOVO — nível de dentro
  };
}

/* 2) RESPOSTA DISCURSIVA (modelo):

  Saída: "Ana", "Fortaleza", true

  O spread { ...original } faz uma CÓPIA RASA: copia só o primeiro nível.
  - nome é um valor primitivo (string): a cópia recebe o próprio valor.
    Mudar copia.nome não afeta original.nome -> "Ana".
  - endereco é um OBJETO: a cópia recebe apenas a REFERÊNCIA (o "endereço
    de memória"). copia.endereco e original.endereco apontam para o MESMO
    objeto. Por isso mudar a cidade pela cópia muda no original
    -> "Fortaleza", e a comparação === dá true (é o mesmo objeto).

  Cópia independente: espalhar também o objeto de dentro:
    const copia = { ...original, endereco: { ...original.endereco } };
  Agora copia.endereco é um objeto novo; original continua "Quixada" e
  copia.endereco === original.endereco dá false.
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
