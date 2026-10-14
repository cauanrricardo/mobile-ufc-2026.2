// =====================================================================
// Lista II — PRÁTICA (mão na massa)
// 1. Complete cada função onde está escrito  // SEU CÓDIGO AQUI
// 2. Rode:  node pratica.js
// 3. Cada teste mostra ✅ ou ❌. Só olhe solucoes.js depois de tentar!
// Os exercícios vão do mais fácil ao mais difícil.
// =====================================================================

// ---------- Exercício 1: arrow function simples ----------
// Retorne o triplo do número.  triplo(4) -> 12
const triplo = n => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 2: ternário ----------
// Retorne "par" ou "impar".  parOuImpar(3) -> "impar"
// Dica: n % 2 === 0 significa par
const parOuImpar = n => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 3: if / else if ----------
// >= 9 "Excelente", >= 7 "Aprovado", >= 5 "Recuperacao", senão "Reprovado"
function classificar(nota) {
  // SEU CÓDIGO AQUI
}

// ---------- Exercício 4: conversão de texto ----------
// Recebe dois números em TEXTO e retorna a SOMA numérica.
// somarTextos("4", "2") -> 6  (e não "42")
const somarTextos = (a, b) => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 5: arrow retornando objeto ----------
// criarProduto("Mouse", 50) -> { nome: "Mouse", preco: 50 }
const criarProduto = (nome, preco) => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 6: map ----------
// Retorne um array NOVO com cada número ao quadrado. [1,2,3] -> [1,4,9]
const quadrados = numeros => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 7: filter ----------
// Retorne só os usuários ativos.
const somenteAtivos = usuarios => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 8: reduce ----------
// Some todos os números. [1,2,3,4] -> 10
const somarTudo = numeros => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 9: spread (sem alterar o original!) ----------
// Retorne um NOVO objeto igual ao produto, mas com o preço informado.
const mudarPreco = (produto, novoPreco) => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 10: rest ----------
// Retorne o usuário SEM a propriedade senha.
// { nome: "Ana", senha: "123" } -> { nome: "Ana" }
const removerSenha = usuario => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 11: push / pop / shift / unshift ----------
// Recebe um array, adiciona 0 no INÍCIO, adiciona 99 no FIM e retorna o array.
// [1,2] -> [0,1,2,99]
const emoldurar = arr => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 12: closure ----------
// criarMultiplicador(3) retorna uma FUNÇÃO que multiplica por 3.
// const vezes3 = criarMultiplicador(3); vezes3(5) -> 15
function criarMultiplicador(fator) {
  // SEU CÓDIGO AQUI
}

// ---------- Exercício 13: for aninhado ----------
// Conte quantos pares (i, j), com i e j de 0 até n-1, têm i + j PAR.
// contarPares(2) -> pares (0,0),(1,1) -> 2      contarPares(3) -> 5
function contarPares(n) {
  // SEU CÓDIGO AQUI
}

// ---------- Exercício 14 (estilo Q21): filter + map + spread ----------
// Mantenha só produtos com estoque > 0 e dê 10% de desconto nos que custam mais de 100.
// NÃO altere o array original.
const prepararVitrine = produtos => {
  // SEU CÓDIGO AQUI
};

// ---------- Exercício 15 (estilo Q3): o desafio final ----------
// Com os produtos em estoque, retorne o VALOR TOTAL do estoque (preco * estoque somado).
// Use filter + map + reduce (ou só reduce, se preferir).
const valorDoEstoque = produtos => {
  // SEU CÓDIGO AQUI
};

// =====================================================================
// NÃO PRECISA MEXER DAQUI PRA BAIXO — são os testes
// =====================================================================
let ok = 0;
let total = 0;
function teste(nome, recebido, esperado) {
  total++;
  const passou = JSON.stringify(recebido) === JSON.stringify(esperado);
  if (passou) ok++;
  console.log(
    `${passou ? "✅" : "❌"} ${nome}` +
      (passou ? "" : `\n     esperado: ${JSON.stringify(esperado)}\n     recebido: ${JSON.stringify(recebido)}`)
  );
}
function seguro(fn) {
  try { return fn(); } catch (e) { return "ERRO: " + e.message; }
}

module.exports = {
  triplo, parOuImpar, classificar, somarTextos, criarProduto, quadrados,
  somenteAtivos, somarTudo, mudarPreco, removerSenha, emoldurar,
  criarMultiplicador, contarPares, prepararVitrine, valorDoEstoque,
};

function rodarTestes(f) {
  ok = 0; total = 0;
  teste("1  triplo", seguro(() => f.triplo(4)), 12);
  teste("2  parOuImpar(3)", seguro(() => f.parOuImpar(3)), "impar");
  teste("2  parOuImpar(8)", seguro(() => f.parOuImpar(8)), "par");
  teste("3  classificar(7)", seguro(() => f.classificar(7)), "Aprovado");
  teste("3  classificar(9)", seguro(() => f.classificar(9)), "Excelente");
  teste("3  classificar(5)", seguro(() => f.classificar(5)), "Recuperacao");
  teste("3  classificar(2)", seguro(() => f.classificar(2)), "Reprovado");
  teste("4  somarTextos", seguro(() => f.somarTextos("4", "2")), 6);
  teste("5  criarProduto", seguro(() => f.criarProduto("Mouse", 50)), { nome: "Mouse", preco: 50 });
  teste("6  quadrados", seguro(() => f.quadrados([1, 2, 3])), [1, 4, 9]);
  teste(
    "7  somenteAtivos",
    seguro(() => f.somenteAtivos([{ nome: "Ana", ativo: true }, { nome: "Bia", ativo: false }])),
    [{ nome: "Ana", ativo: true }]
  );
  teste("8  somarTudo", seguro(() => f.somarTudo([1, 2, 3, 4])), 10);

  const p = { nome: "Teclado", preco: 100 };
  teste("9  mudarPreco (novo)", seguro(() => f.mudarPreco(p, 80)), { nome: "Teclado", preco: 80 });
  teste("9  mudarPreco (original intacto)", p.preco, 100);

  const u = { nome: "Ana", senha: "123" };
  teste("10 removerSenha", seguro(() => f.removerSenha(u)), { nome: "Ana" });
  teste("10 removerSenha (original intacto)", u.senha, "123");

  teste("11 emoldurar", seguro(() => f.emoldurar([1, 2])), [0, 1, 2, 99]);
  teste("12 criarMultiplicador", seguro(() => f.criarMultiplicador(3)(5)), 15);
  teste("13 contarPares(2)", seguro(() => f.contarPares(2)), 2);
  teste("13 contarPares(3)", seguro(() => f.contarPares(3)), 5);

  const loja = [
    { nome: "Mouse", preco: 80, estoque: 3 },
    { nome: "Teclado", preco: 150, estoque: 2 },
    { nome: "Monitor", preco: 900, estoque: 0 },
    { nome: "Headset", preco: 200, estoque: 4 },
  ];
  teste("14 prepararVitrine", seguro(() => f.prepararVitrine(loja)), [
    { nome: "Mouse", preco: 80, estoque: 3 },
    { nome: "Teclado", preco: 135, estoque: 2 },
    { nome: "Headset", preco: 180, estoque: 4 },
  ]);
  teste("14 prepararVitrine (original intacto)", loja[1].preco, 150);
  teste("15 valorDoEstoque", seguro(() => f.valorDoEstoque(loja)), 80 * 3 + 150 * 2 + 200 * 4);

  console.log(`\nResultado: ${ok}/${total} testes passando`);
}
module.exports.rodarTestes = rodarTestes;

if (require.main === module) rodarTestes(module.exports);
