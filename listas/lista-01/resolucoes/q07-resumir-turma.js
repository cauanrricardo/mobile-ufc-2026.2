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
  // Caso especial primeiro: evita dividir por zero (0 / 0 = NaN).
  if (alunos.length === 0) {
    return { aprovados: [], mediaTurma: 0, melhorAluno: null };
  }

  // Passo 1: um array novo com { nome, media } de cada aluno.
  const comMedia = alunos.map(aluno => {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    return { nome: aluno.nome, media: soma / aluno.notas.length };
  });

  // Passo 2: aprovados = quem tem média >= 7, só o nome.
  const aprovados = comMedia
    .filter(a => a.media >= 7)
    .map(a => a.nome);

  // Passo 3: média das médias.
  const somaMedias = comMedia.reduce((acc, a) => acc + a.media, 0);
  const mediaTurma = somaMedias / comMedia.length;

  // Passo 4: melhor aluno. Usamos > (e não >=): em empate, quem veio
  // primeiro continua sendo o melhor.
  let melhor = comMedia[0];
  for (const a of comMedia) {
    if (a.media > melhor.media) melhor = a;
  }

  return { aprovados, mediaTurma, melhorAluno: melhor.nome };
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
teste("turma vazia", () => resumirTurma([]), { aprovados: [], mediaTurma: 0, melhorAluno: null });
teste("empate (fica o primeiro)", () =>
  resumirTurma([
    { nome: "Davi", notas: [6, 6, 6] },
    { nome: "Eva", notas: [9, 9, 9] },
    { nome: "Fábio", notas: [9, 9, 9] },
  ]).melhorAluno, "Eva");
teste("nenhum aprovado", () =>
  resumirTurma([
    { nome: "Gil", notas: [5, 5, 5] },
    { nome: "Hugo", notas: [3, 4, 5] },
  ]), { aprovados: [], mediaTurma: 4.5, melhorAluno: "Gil" });
teste("não altera a entrada", () => preservaEntrada(resumirTurma, alunos), true);
resumo();
