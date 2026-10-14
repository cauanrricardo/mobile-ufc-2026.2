# Lista de Exercícios I — JavaScript (Revisão I)

UFC · Campus Quixadá · 2026.2 · Questões subjetivas (escrever código + explicar)

## Como fazer as atividades

Cada questão tem **o seu próprio arquivo**, então as variáveis de uma questão não atrapalham as de outra.

```
lista-01/
├── teste.js        <- ajudante que mostra ✅/❌ (não mexer)
├── exercicios/     <- VOCÊ resolve aqui (funções vazias + testes prontos)
└── resolucoes/     <- respostas comentadas (só depois de tentar!)
```

Passo a passo para cada questão:

1. Abra `exercicios/q01-analisar-valores.js` e leia o enunciado no topo.
2. Escreva o código onde está `// SEU CÓDIGO AQUI`.
3. Rode no terminal, de dentro da pasta `lista-01`:
   ```bash
   node exercicios/q01-analisar-valores.js
   ```
4. Ficou ❌? O teste mostra o que era **esperado** e o que foi **recebido**. Corrija e rode de novo.
5. Ficou tudo ✅? Compare com `resolucoes/q01-...` para ver outra forma de fazer e os comentários.

Para rodar todas as questões de uma vez: `for f in exercicios/*.js; do node $f; done`

## Ordem sugerida (do fácil ao difícil)

| Questão | Nível | Assunto principal |
|---|---|---|
| [Q02 Classificar temperatura](exercicios/q02-classificar-temperatura.js) | L1 | if / else if / else e limites |
| [Q01 Analisar valores](exercicios/q01-analisar-valores.js) | L1 | `Math.max`, `filter`, `%` |
| [Q03 Filtrar catálogo](exercicios/q03-filtrar-catalogo.js) | L1 | **análise**: `filter`, `map`, `&&` |
| [Q04 Corrigir map](exercicios/q04-corrigir-map.js) | L1 | **análise**: `return` em arrow function |
| [Q06 Copiar objetos aninhados](exercicios/q06-copiar-objetos-aninhados.js) | L2 | **análise**: cópia rasa x independente |
| [Q05 Resumir carrinho](exercicios/q05-resumir-carrinho.js) | L2 | `reduce` acumulando objeto |
| [Q11 Maior sequência](exercicios/q11-maior-sequencia.js) | L2 | laço `for` com índice, `slice` |
| [Q07 Resumir turma](exercicios/q07-resumir-turma.js) | L2 | `map` + `filter` + `reduce` juntos |
| [Q08 Movimentações de estoque](exercicios/q08-aplicar-movimentacoes.js) | L2 | `find`, cópia de objetos |
| [Q10 Relatório de usuários](exercicios/q10-gerar-relatorio.js) | L3 | rest, agrupar em objeto, `trim`/`toLowerCase` |
| [Q09 Mesclar configurações](exercicios/q09-mesclar-configuracoes.js) | L3 | rest params, spread aninhado, `Set` |

Se o tempo estiver curto, priorize **Q02, Q01, Q03, Q04, Q06, Q05 e Q07**. Elas cobrem quase tudo que cai.

---

## Teoria nova desta lista

O básico (`let`/`const`, arrow functions, `map`/`filter`/`reduce`, spread) está no [README da Lista 02](../lista-02/README.md). Aqui está só o que é **novo**.

### `for...of` e `for...in`

```js
const notas = [8, 7, 9];
for (const nota of notas) { }   // OF = cada VALOR do array   -> 8, 7, 9

const aluno = { nome: "Ana", idade: 20 };
for (const chave in aluno) { }  // IN = cada CHAVE do objeto  -> "nome", "idade"
```

Macete: **of** = valores (arrays), **in** = chaves (objetos).

### `find`: achar UM elemento (Q08)

```js
const p = produtos.find(p => p.id === 2); // primeiro que bate, ou undefined
```

`filter` devolve um **array** com todos os que batem; `find` devolve **o elemento** (só o primeiro).

### `reduce` acumulando um objeto (Q05)

```js
itens.reduce(
  (acc, item) => ({ total: acc.total + item.preco, qtd: acc.qtd + 1 }),
  { total: 0, qtd: 0 }   // valor inicial é um OBJETO
);
```

### Cópia rasa x cópia independente (Q06, Q08, Q09)

```js
const original = { nome: "Ana", endereco: { cidade: "Quixada" } };

const rasa = { ...original };
rasa.endereco === original.endereco;   // true -> o MESMO objeto de dentro!

const independente = { ...original, endereco: { ...original.endereco } };
independente.endereco === original.endereco; // false -> objeto novo
```

O spread copia **só o primeiro nível**. Objetos e arrays de dentro continuam sendo compartilhados (referência). Para copiar de verdade, espalhe também o de dentro.

### Rest em parâmetros (Q09)

```js
function juntar(primeiro, ...resto) {
  // juntar(1, 2, 3, 4) -> primeiro = 1, resto = [2, 3, 4]
}
```

Os `...` nos **parâmetros** juntam os argumentos que sobram em um array.

### Rest na desestruturação para remover campos (Q10)

```js
const { senha, ativo, ...dados } = usuario; // dados = tudo MENOS senha e ativo
```

### Objeto como "dicionário" para agrupar (Q10)

```js
const grupos = {};
for (const u of usuarios) {
  if (grupos[u.perfil] === undefined) grupos[u.perfil] = []; // cria o grupo
  grupos[u.perfil].push(u.nome);
}
// { aluno: ["Ana"], monitor: ["Bia"] }
```

`grupos[u.perfil]` com colchetes usa o **valor da variável** como nome da chave.

### Remover repetidos com `Set` (Q09)

```js
[...new Set(["log", "cache", "log"])]  // ["log", "cache"]  (mantém a ordem)
```

### Funções de texto (Q10)

```js
"  ANA@UFC.BR ".trim()        // "ANA@UFC.BR"  (tira espaços das pontas)
"ANA@UFC.BR".toLowerCase()    // "ana@ufc.br"
```

### `slice`: copiar um pedaço do array (Q11)

```js
[10, 20, 30, 40].slice(1, 3)  // [20, 30]  (do índice 1 até ANTES do 3)
```

`slice` **não altera** o original (diferente do `splice`, que altera).

### Casos especiais primeiro (Q07, Q11)

Quando o enunciado fala "para entrada vazia, retorne...", trate isso **no começo** da função:

```js
if (alunos.length === 0) return { aprovados: [], mediaTurma: 0, melhorAluno: null };
```

Isso evita `0 / 0 = NaN` e acessar `array[0]` que não existe.

### Empate: `>` x `>=` (Q07, Q11)

Ao procurar o maior, usar `>` mantém **o primeiro** em caso de empate. Com `>=`, o **último** ganha.

---

## Respostas das questões de análise (resumo)

**Q03:** `nomes = ["Caderno", "Regua"]`. `filter` mantém só quem tem estoque > 0 **e** (`&&`) preço ≤ 20. `map` transforma cada produto no seu nome. Os dois criam arrays novos e mantêm a ordem.

**Q04:** Mostra `undefined`. As duas arrow functions têm `{ }` sem `return`. Correção: `const dobrar = valores => valores.map(valor => valor * 2);`

**Q06:** Exibe `"Ana"`, `"Fortaleza"` e `true`. O spread faz cópia rasa: `nome` (texto) é copiado, mas `endereco` (objeto) é compartilhado. Correção: `{ ...original, endereco: { ...original.endereco } }`.

A explicação completa de cada uma está nos arquivos em `resolucoes/`.
