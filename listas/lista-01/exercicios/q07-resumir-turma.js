// =====================================================================
// Lista I — Questão 07: Resumir uma turma (L2)
// Cada aluno: { nome, notas: [n1, n2, n3] }. Retorne:
//   aprovados   : nomes com média >= 7, na ordem de entrada
//   mediaTurma  : média das médias (sem arredondar)
//   melhorAluno : nome da maior média; em empate, o PRIMEIRO
// Turma vazia -> { aprovados: [], mediaTurma: 0, melhorAluno: null }
// Não altere a entrada.
//
// Dica: primeiro calcule a média de cada aluno com map; depois use
// filter (aprovados), reduce (soma das médias) e um for (melhor aluno).
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");
function resumirTurma(alunos) {
  if (alunos.length === 0) {
    return { aprovados: [], mediaTurma: 0, melhorAluno: null };
  }

  const aprovados = [];
  let somaMedias = 0;
  let melhorNome = null;
  let melhorMedia = -1;

  for (const n of alunos) {
    // 1. média deste aluno (o for interno soma as notas dele)
    let soma = 0;
    for (const nota of n.notas) {
      soma = soma + nota;
    }
    const media = soma / n.notas.length;

    // 2. aprovados: guarda o nome se a média for 7 ou mais
    if (media >= 7) {
      aprovados.push(n.nome);
    }

    // 3. soma das médias, para depois dividir pelo total de alunos
    somaMedias = somaMedias + media;

    // 4. melhor aluno: troca só se for MAIOR (empate fica com o primeiro)
    if (media > melhorMedia) {
      melhorMedia = media;
      melhorNome = n.nome;
    }
  }

  return {
    aprovados: aprovados,
    mediaTurma: somaMedias / alunos.length,
    melhorAluno: melhorNome,
  };
}
// ----------------------------- TESTES -----------------------------
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 7] },
  { nome: "Carla", notas: [9, 8, 7] },
];
teste("exemplo do enunciado", () => resumirTurma(alunos), {
  aprovados: ["Ana", "Carla"],
  mediaTurma: 7.333333333333333,
  melhorAluno: "Ana", // Ana e Carla empatam com 8 -> fica a primeira
});
teste("turma vazia", () => resumirTurma([]), {
  aprovados: [],
  mediaTurma: 0,
  melhorAluno: null,
});
teste(
  "empate (fica o primeiro)",
  () =>
    resumirTurma([
      { nome: "Davi", notas: [6, 6, 6] },
      { nome: "Eva", notas: [9, 9, 9] },
      { nome: "Fábio", notas: [9, 9, 9] },
    ]).melhorAluno,
  "Eva",
);
teste(
  "nenhum aprovado",
  () =>
    resumirTurma([
      { nome: "Gil", notas: [5, 5, 5] },
      { nome: "Hugo", notas: [3, 4, 5] },
    ]),
  { aprovados: [], mediaTurma: 4.5, melhorAluno: "Gil" },
);
teste(
  "não altera a entrada",
  () => preservaEntrada(resumirTurma, alunos),
  true,
);
resumo();
