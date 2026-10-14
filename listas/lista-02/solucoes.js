// =====================================================================
// Lista II — SOLUÇÕES da prática (só olhe depois de tentar!)
// Rode:  node solucoes.js   -> deve dar todos ✅
// =====================================================================

// 1. Sem { } -> retorno implícito
const triplo = n => n * 3;

// 2. Ternário: condicao ? seVerdadeiro : seFalso
const parOuImpar = n => (n % 2 === 0 ? "par" : "impar");

// 3. Da MAIOR faixa para a menor: o if para no primeiro verdadeiro
function classificar(nota) {
  if (nota >= 9) return "Excelente";
  else if (nota >= 7) return "Aprovado";
  else if (nota >= 5) return "Recuperacao";
  else return "Reprovado";
}

// 4. Converte ANTES de somar, senão "4" + "2" = "42"
const somarTextos = (a, b) => Number(a) + Number(b);

// 5. Parênteses em volta do objeto! (lembra da Q8)
//    { nome, preco } é atalho para { nome: nome, preco: preco }
const criarProduto = (nome, preco) => ({ nome, preco });

// 6. map: transforma cada item, mesmo tamanho
const quadrados = numeros => numeros.map(n => n * n);

// 7. filter: fica quem retorna true
const somenteAtivos = usuarios => usuarios.filter(u => u.ativo);

// 8. reduce: acc começa em 0 e vai acumulando
const somarTudo = numeros => numeros.reduce((acc, n) => acc + n, 0);

// 9. Spread cria objeto NOVO; preco vem depois e sobrescreve
const mudarPreco = (produto, novoPreco) => ({ ...produto, preco: novoPreco });

// 10. Rest: separa senha, junta o resto em "resto"
const removerSenha = usuario => {
  const { senha, ...resto } = usuario;
  return resto;
};

// 11. unshift = início, push = fim (esses MODIFICAM o array)
const emoldurar = arr => {
  arr.unshift(0);
  arr.push(99);
  return arr;
};

// 12. Closure: a função interna lembra de "fator"
function criarMultiplicador(fator) {
  return valor => valor * fator;
}

// 13. Dois for, um dentro do outro (igual à Q9)
function contarPares(n) {
  let contador = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) contador++;
    }
  }
  return contador;
}

// 14. Igual à Q21: filter primeiro, depois map com spread + ternário
const prepararVitrine = produtos =>
  produtos
    .filter(p => p.estoque > 0)
    .map(p => ({
      ...p,
      preco: p.preco > 100 ? p.preco * 0.9 : p.preco,
    }));

// 15. filter -> map (valor de cada um) -> reduce (soma)
const valorDoEstoque = produtos =>
  produtos
    .filter(p => p.estoque > 0)
    .map(p => p.preco * p.estoque)
    .reduce((acc, v) => acc + v, 0);

// ---------------------------------------------------------------------
const { rodarTestes } = require("./pratica.js");
rodarTestes({
  triplo, parOuImpar, classificar, somarTextos, criarProduto, quadrados,
  somenteAtivos, somarTudo, mudarPreco, removerSenha, emoldurar,
  criarMultiplicador, contarPares, prepararVitrine, valorDoEstoque,
});
