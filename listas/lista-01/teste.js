// Ajudante de testes — não precisa mexer aqui.
// Cada arquivo de questão usa:  teste("nome", () => resultado, esperado)
const { isDeepStrictEqual } = require("node:util");

let ok = 0;
let total = 0;

function teste(nome, executar, esperado) {
  total++;
  let recebido;
  try {
    recebido = executar();
  } catch (erro) {
    recebido = "ERRO: " + erro.message;
  }
  const passou = isDeepStrictEqual(recebido, esperado);
  if (passou) ok++;
  console.log(`${passou ? "✅" : "❌"} ${nome}`);
  if (!passou) {
    console.log("     esperado:", JSON.stringify(esperado));
    console.log("     recebido:", JSON.stringify(recebido));
  }
}

function resumo() {
  console.log(`\nResultado: ${ok}/${total} testes passando`);
}

// Executa a função e confere se a ENTRADA continuou igual (não foi alterada).
function preservaEntrada(funcao, ...entradas) {
  const antes = JSON.stringify(entradas);
  const resultado = funcao(...entradas);
  return resultado !== undefined && JSON.stringify(entradas) === antes;
}

module.exports = { teste, resumo, preservaEntrada };
