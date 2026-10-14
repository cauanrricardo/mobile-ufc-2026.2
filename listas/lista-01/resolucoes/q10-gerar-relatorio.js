// =====================================================================
// Lista I — Questão 10: Criar um relatório de usuários (L3)
// Retorne:
//   porPerfil        : ativos agrupados por perfil (ordem de entrada), SEM
//                      senha, ativo e perfil (use desestruturação com rest)
//   totalAtivos      : quantos ativos
//   emailsDuplicados : e-mails de 2+ usuários ativos, sem repetir, na ordem
//                      em que a 2ª ocorrência aparece
// E-mail normalizado: .trim() (tira espaços das pontas) + .toLowerCase().
// Grupos vazios não aparecem. Entrada vazia -> { porPerfil: {}, totalAtivos: 0, emailsDuplicados: [] }
//
// Dica: objeto como "dicionário": grupos["aluno"] = [...]
// =====================================================================
const { teste, resumo, preservaEntrada } = require("../teste.js");

function gerarRelatorio(usuarios) {
  const ativos = usuarios.filter(u => u.ativo);

  const porPerfil = {};
  const vistos = [];             // e-mails que já apareceram uma vez
  const emailsDuplicados = [];

  for (const usuario of ativos) {
    // REST: tira senha, ativo e perfil; o resto (nome, email...) vai em "dados"
    const { senha, ativo, perfil, ...dados } = usuario;
    const email = dados.email.trim().toLowerCase();

    // Cria o grupo na primeira vez que o perfil aparece.
    if (porPerfil[perfil] === undefined) {
      porPerfil[perfil] = [];
    }
    porPerfil[perfil].push({ ...dados, email }); // objeto NOVO com e-mail normalizado

    // Duplicados: se já vimos e ainda não está na lista, é a 2ª ocorrência.
    if (vistos.includes(email)) {
      if (!emailsDuplicados.includes(email)) emailsDuplicados.push(email);
    } else {
      vistos.push(email);
    }
  }

  return { porPerfil, totalAtivos: ativos.length, emailsDuplicados };
}

// ----------------------------- TESTES -----------------------------
const usuarios = [
  { nome: "Ana", perfil: "aluno", ativo: true, email: " ANA@UFC.BR ", senha: "123" },
  { nome: "Bia", perfil: "monitor", ativo: true, email: "ana@ufc.br", senha: "456" },
];
teste("exemplo do enunciado", () => gerarRelatorio(usuarios), {
  porPerfil: {
    aluno: [{ nome: "Ana", email: "ana@ufc.br" }],
    monitor: [{ nome: "Bia", email: "ana@ufc.br" }],
  },
  totalAtivos: 2,
  emailsDuplicados: ["ana@ufc.br"],
});
teste("entrada vazia", () => gerarRelatorio([]), { porPerfil: {}, totalAtivos: 0, emailsDuplicados: [] });
teste("usuários inativos são ignorados", () =>
  gerarRelatorio([
    { nome: "Caio", perfil: "professor", ativo: false, email: "c@ufc.br", senha: "x" },
    { nome: "Duda", perfil: "aluno", ativo: true, email: "d@ufc.br", senha: "y" },
    { nome: "Edu", perfil: "aluno", ativo: false, email: "d@ufc.br", senha: "z" },
  ]), {
  porPerfil: { aluno: [{ nome: "Duda", email: "d@ufc.br" }] },
  totalAtivos: 1,
  emailsDuplicados: [],
});
teste("três ocorrências do mesmo e-mail (aparece uma vez)", () =>
  gerarRelatorio([
    { nome: "F1", perfil: "aluno", ativo: true, email: "f@ufc.br", senha: "1" },
    { nome: "G", perfil: "aluno", ativo: true, email: "g@ufc.br", senha: "2" },
    { nome: "F2", perfil: "aluno", ativo: true, email: " F@UFC.BR", senha: "3" },
    { nome: "G2", perfil: "monitor", ativo: true, email: "G@ufc.br", senha: "4" },
    { nome: "F3", perfil: "professor", ativo: true, email: "f@ufc.br ", senha: "5" },
  ]).emailsDuplicados, ["f@ufc.br", "g@ufc.br"]);
teste("não altera a entrada", () => preservaEntrada(gerarRelatorio, usuarios), true);
resumo();
