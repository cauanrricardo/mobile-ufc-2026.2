// =====================================================================
// Lista de Exercícios II — JavaScript · Node.js (QXD0253 - UFC Quixadá)
// Rode com:   node questoes.js
// Cada questão está isolada num bloco { } para as variáveis não colidirem.
// =====================================================================

function titulo(n) {
  console.log(`\n========== Questão ${String(n).padStart(2, "0")} ==========`);
}

// ---------------------------------------------------------------------
titulo(1); // Resposta: C) 33
{
  const ajustar = valor => valor * 2;   // arrow function: recebe valor, devolve valor*2

  let pontos = 8;
  let bonus = 4;

  pontos = pontos + bonus; // pontos = 8 + 4 = 12
  bonus = pontos - 3;      // bonus usa o pontos JÁ ATUALIZADO: 12 - 3 = 9

  console.log(ajustar(pontos) + bonus); // (12 * 2) + 9 = 33
}

// ---------------------------------------------------------------------
titulo(2); // Resposta: E) false, false, false
{
  const idade = 21;
  const entrada = "51";

  console.log(idade == entrada);          // == converte "51" -> 51; 21 == 51 -> false
  console.log(idade === entrada);         // tipos diferentes (number x string) -> false
  console.log(Number(entrada) === idade); // 51 === 21 -> false
  // Pegadinha: quem lê rápido pensa "21" e marca B. O texto é "51"!
}

// ---------------------------------------------------------------------
titulo(3); // Resposta: A) correta — 50, 220, 96 e total 366
{
  function criarAjuste(taxa) {
    // CLOSURE: a função de dentro "lembra" de taxa mesmo depois
    // que criarAjuste terminou de executar.
    return function (valor) {
      return valor * taxa;
    };
  }

  const ajustes = [criarAjuste(1), criarAjuste(1.1), criarAjuste(1.2)];

  const produtos = [
    { nome: "Mouse", preco: 50, estoque: 4 },
    { nome: "Teclado", preco: 100, estoque: 0 },
    { nome: "Monitor", preco: 200, estoque: 3 },
    { nome: "Headset", preco: 80, estoque: 2 },
  ];

  const selecionados = produtos
    .filter(produto => produto.estoque > 0) // tira o Teclado -> [Mouse, Monitor, Headset]
    .map((produto, indice) => {             // índices do NOVO array: 0, 1, 2
      const { estoque, ...dados } = produto; // rest: dados = tudo menos estoque (cópia!)
      return {
        ...dados,                             // spread: copia nome e preco
        preco: ajustes[indice](produto.preco),// sobrescreve preco
      };
    });

  const total = selecionados.reduce((acc, p) => acc + p.preco, 0);

  console.log(selecionados);
  console.log(total); // 366 (o Monitor aparece como 220.00000000000003 por arredondamento de ponto flutuante)
  console.log("produtos original intacto?", produtos[0]); // ainda tem estoque
}

// ---------------------------------------------------------------------
titulo(4); // Resposta: B) criar um novo objeto com spread dentro do map
{
  // VERSÃO COM BUG (muta o original):
  const produtosBug = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 200 },
  ];
  const promoBug = produtosBug.map(produto => {
    produto.preco = produto.preco * 0.8; // altera o MESMO objeto (referência)
    return produto;
  });
  console.log("com bug:", produtosBug[0].preco, promoBug[0].preco); // 80 80

  // VERSÃO CORRIGIDA (alternativa B):
  const produtos = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 200 },
  ];
  const promocao = produtos.map(produto => ({
    ...produto,                  // objeto NOVO
    preco: produto.preco * 0.8,
  }));
  console.log("corrigido:", produtos[0].preco, promocao[0].preco); // 100 80
}

// ---------------------------------------------------------------------
titulo(5); // Resposta: C) Recuperacao
{
  const nota = 7;
  let situacao;

  if (nota >= 9) {            // 7 >= 9? não
    situacao = "Excelente";
  } else if (nota < 7) {      // 7 < 7? NÃO (7 não é menor que 7)
    situacao = "Aprovado";
  } else if (nota >= 5) {     // 7 >= 5? sim -> entra aqui e PARA
    situacao = "Recuperacao";
  } else {
    situacao = "Reprovado";
  }
  console.log(situacao);
  // Obs: a lógica do programa está errada (nota 7 deveria ser Aprovado),
  // mas a pergunta é o que É exibido, não o que deveria ser.
}

// ---------------------------------------------------------------------
titulo(6); // Resposta: C
{
  const atualizados = [20, 30, 40];
  const precos = atualizados.map(preco => preco + 10); // map cria array NOVO
  console.log(precos);      // [30, 40, 50]
  console.log(atualizados); // [20, 30, 40]  (original intacto)
  // Atenção: os nomes estão "trocados" de propósito para confundir.
}

// ---------------------------------------------------------------------
titulo(7); // Resposta: C) 2
{
  const usuarios = [
    { nome: "Ana", ativo: true },
    { nome: "Bruno", ativo: false },
    { nome: "Carlos", ativo: true },
  ];
  // !(!x) é o mesmo que x (dupla negação). Então filtra quem tem ativo true.
  const resultado = usuarios.filter(usuario => !(!usuario.ativo));
  console.log(resultado.length); // 2 (Ana e Carlos)
}

// ---------------------------------------------------------------------
titulo(8); // Resposta: C) undefined
{
  const criarProduto = nome => {
    nome: nome; // { } aqui é BLOCO de código, não objeto! "nome:" vira um label.
  };            // sem return -> retorna undefined
  console.log(criarProduto("Mouse")); // undefined

  // Como seria o certo: envolver o objeto em parênteses
  const criarProdutoCerto = nome => ({ nome: nome });
  console.log(criarProdutoCerto("Mouse")); // { nome: 'Mouse' }
}

// ---------------------------------------------------------------------
titulo(9); // Resposta: A) [1, 6, 3] e 10
{
  const operacoes = [x => x + 1, x => x * 2, x => x - 2];
  const valores = [2, 3, 4];

  for (let i = 0; i < valores.length; i++) {
    for (let j = 0; j < operacoes.length; j++) {
      if ((i + j) % 2 === 0) { // só aplica quando i+j é PAR
        const antes = valores[i];
        valores[i] = operacoes[j](valores[i]);
        console.log(`  i=${i} j=${j} (i+j=${i + j} par): ${antes} -> ${valores[i]}`);
      }
    }
  }

  const resultado = valores.reduce((total, valor) => total + valor, 0);
  console.log(valores);   // [1, 6, 3]
  console.log(resultado); // 10
}

// ---------------------------------------------------------------------
titulo(10); // Resposta: B) 100, 5, 120, 3
{
  const produto = { nome: "Teclado", preco: 100, estoque: 5 };
  const atualizado = { ...produto, preco: 120 }; // cópia + sobrescreve preco
  atualizado.estoque = 3; // mexe só na cópia
  console.log(produto.preco, produto.estoque, atualizado.preco, atualizado.estoque);
}

// ---------------------------------------------------------------------
titulo(11); // Resposta: B) V – F – V – V
{
  // I. V — map cria array novo
  const a = [1, 2, 3];
  const b = a.map(x => x * 10);
  console.log("I:", a, b);

  // II. F — filter NÃO modifica o original
  const c = [1, 2, 3, 4];
  const d = c.filter(x => x > 2);
  console.log("II:", c, d);

  // III. V — arrow com vários parâmetros (precisa de parênteses)
  const soma = (x, y, z) => x + y + z;
  console.log("III:", soma(1, 2, 3));

  // IV. V — const impede REATRIBUIR a variável, não mudar o conteúdo do objeto
  const obj = { valor: 1 };
  obj.valor = 99; // permitido
  console.log("IV:", obj);
  // obj = {};   // ISSO daria TypeError: Assignment to constant variable.
}

// ---------------------------------------------------------------------
titulo(12); // Resposta: C) 42 e 6
{
  const quantidade = "4";
  console.log(quantidade + 2);         // string + número = concatenação -> "42"
  console.log(Number(quantidade) + 2); // 4 + 2 = 6
}

// ---------------------------------------------------------------------
titulo(13); // Resposta: A) 5
{
  function soma(a, b) {
    return a + b;
  }
  console.log(soma(2, 3));
}

// ---------------------------------------------------------------------
titulo(14); // Resposta: C (teórica)
{
  console.log('5 == "5"  ->', 5 == "5");   // true  (converte tipo)
  console.log('5 === "5" ->', 5 === "5");  // false (tipos diferentes)
  console.log('0 == false ->', 0 == false); // true  (cuidado!)
}

// ---------------------------------------------------------------------
titulo(15); // Resposta: A) Sim
{
  let idade = 18;
  let maiorDeIdade = idade >= 18 ? "Sim" : "Não"; // 18 >= 18 é true
  console.log(maiorDeIdade);
}

// ---------------------------------------------------------------------
titulo(16); // Resposta: A) Olá, Carlos!
{
  function saudacao(nome) {
    return nome ? "Olá, " + nome + "!" : "Olá!"; // "Carlos" é truthy
  }
  console.log(saudacao("Carlos"));
  console.log(saudacao(""));  // "" é falsy -> "Olá!"
  console.log(saudacao());    // undefined é falsy -> "Olá!"
}

// ---------------------------------------------------------------------
titulo(17); // Resposta: B) 20
{
  const multiplicar = (a, b) => a * b;
  console.log(multiplicar(4, 5));
}

// ---------------------------------------------------------------------
titulo(18); // Resposta: C) [1, 4, 9, 16, 25]
{
  let numeros = [1, 2, 3, 4, 5];
  let novo = numeros.map(function (numero) {
    return numero * numero;
  });
  console.log(novo);
}

// ---------------------------------------------------------------------
titulo(19); // Resposta: A) 1-B, 2-D, 3-A, 4-C
{
  const arr = [2, 3];
  arr.push(4);      console.log("push(4)    ->", arr); // fim: [2,3,4]
  arr.pop();        console.log("pop()      ->", arr); // tira do fim: [2,3]
  arr.shift();      console.log("shift()    ->", arr); // tira do início: [3]
  arr.unshift(1);   console.log("unshift(1) ->", arr); // põe no início: [1,3]
}

// ---------------------------------------------------------------------
titulo(20); // Resposta: A
{
  let saudacao = nome => "Olá, " + nome + "!"; // retorno implícito, sem { }
  console.log(saudacao("Ana"));
  // As outras alternativas têm erro de sintaxe (function com =>, { } vazio seguido de texto, etc.)
}

// ---------------------------------------------------------------------
titulo(21); // Resposta: A) 3, 135 e 150
{
  const produtos = [
    { nome: "Mouse", preco: 80, estoque: 3 },
    { nome: "Teclado", preco: 150, estoque: 2 },
    { nome: "Monitor", preco: 900, estoque: 0 },
    { nome: "Headset", preco: 200, estoque: 4 },
  ];

  const resultado = produtos
    .filter(produto => produto.estoque > 0) // [Mouse, Teclado, Headset]
    .map(produto => ({
      ...produto,
      preco: produto.preco > 100 ? produto.preco * 0.9 : produto.preco,
    }));

  console.log(resultado.length);     // 3
  console.log(resultado[1].preco);   // Teclado: 150 * 0.9 = 135
  console.log(produtos[1].preco);    // original intacto: 150
}
