# Lista II — Questões subjetivas (estilo prova)

Tente responder **no papel antes** de olhar a resposta. Na prova não tem Node pra testar, então treine "rodar o código na cabeça".

Dica geral para discursiva: responda em 3 partes → **o que acontece**, **por que acontece**, **como corrigir / exemplo**.

---

## S1 — `let` x `const`

**Pergunta:** Explique a diferença entre `let` e `const`. O código abaixo dá erro? Por quê?

```js
const carrinho = { itens: 0 };
carrinho.itens = 3;
console.log(carrinho.itens);
```

<details><summary>Resposta</summary>

- `let` permite **reatribuir** a variável; `const` não permite.
- O código **não dá erro** e imprime `3`. O `const` impede trocar *qual objeto* está na variável (`carrinho = {}` daria `TypeError`), mas não impede mudar as **propriedades** do objeto.
- Se quisesse travar as propriedades: `Object.freeze(carrinho)`.
</details>

---

## S2 — `==` x `===`

**Pergunta:** Qual a diferença entre `==` e `===`? Dê um exemplo em que eles dão resultados diferentes e diga qual você usaria num sistema real.

<details><summary>Resposta</summary>

- `==` (igualdade frouxa) **converte os tipos** antes de comparar.
- `===` (igualdade estrita) compara **valor e tipo**, sem converter.
- Exemplo: `10 == "10"` → `true`; `10 === "10"` → `false`.
- Em sistema real usa-se `===`, porque evita resultados inesperados como `0 == false` → `true`. Se o dado vier como texto, converte explicitamente com `Number()` antes.
</details>

---

## S3 — O `+` com texto

**Pergunta:** Um formulário devolve `idade = "20"`. O programador faz `idade + 1` e obtém `"201"`. Explique o problema e corrija.

<details><summary>Resposta</summary>

Quando um dos lados do `+` é **string**, o JavaScript **concatena** (junta os textos) em vez de somar. `"20" + 1` → `"201"`.

Correção: converter antes.
```js
const idade = "20";
console.log(Number(idade) + 1); // 21
```
(Outros operadores como `-`, `*`, `/` convertem sozinhos: `"20" - 1` → `19`, mas não conte com isso.)
</details>

---

## S4 — Arrow function retornando objeto

**Pergunta:** Por que a função abaixo retorna `undefined`? Reescreva para retornar `{ nome: "Ana", idade: 20 }`.

```js
const criarAluno = (nome, idade) => { nome: nome, idade: idade };
```

<details><summary>Resposta</summary>

Numa arrow function, `{` logo depois da `=>` é interpretado como **início de um bloco de código**, não como objeto. Dentro de um bloco é preciso `return`; como não tem, a função devolve `undefined`. (Com duas propriedades, esse código na verdade dá **erro de sintaxe**; com uma só, como na Q8, retorna `undefined`.)

Duas correções:
```js
const criarAluno = (nome, idade) => ({ nome: nome, idade: idade }); // parênteses
const criarAluno2 = (nome, idade) => { return { nome, idade }; };    // return explícito
```
`{ nome, idade }` é a forma curta de `{ nome: nome, idade: idade }`.
</details>

---

## S5 — Converter função tradicional em arrow

**Pergunta:** Converta para arrow function com retorno implícito:

```js
function areaRetangulo(base, altura) {
  return base * altura;
}
```

<details><summary>Resposta</summary>

```js
const areaRetangulo = (base, altura) => base * altura;
```
Com **dois** parâmetros os parênteses são obrigatórios. Sem `{ }`, o resultado da expressão é retornado automaticamente.
</details>

---

## S6 — `map`, `filter` e `reduce`

**Pergunta:** Explique com suas palavras o que cada método faz, o que ele retorna e se altera o array original.

<details><summary>Resposta</summary>

| Método | O que faz | Retorna | Altera o original? |
|---|---|---|---|
| `map` | aplica uma função a **cada** item | array **novo do mesmo tamanho** | Não |
| `filter` | mantém só os itens cuja função retorna `true` | array **novo, igual ou menor** | Não |
| `reduce` | acumula todos os itens em **um único valor** | um valor (número, objeto...) | Não |

Exemplo: `[1,2,3,4]` → `map(x => x*2)` = `[2,4,6,8]`; `filter(x => x%2===0)` = `[2,4]`; `reduce((a,x) => a+x, 0)` = `10`.

Cuidado: se a função dentro do `map` alterar um **objeto** (`p.preco = ...`), o objeto original muda — veja S8.
</details>

---

## S7 — Escreva o código

**Pergunta:** Dado o array abaixo, escreva um código que retorne **o total gasto apenas com produtos da categoria "info"**, usando `filter` e `reduce`.

```js
const compras = [
  { nome: "Mouse", categoria: "info", valor: 50 },
  { nome: "Arroz", categoria: "mercado", valor: 30 },
  { nome: "Teclado", categoria: "info", valor: 120 },
];
```

<details><summary>Resposta</summary>

```js
const totalInfo = compras
  .filter(c => c.categoria === "info")   // [Mouse, Teclado]
  .reduce((acc, c) => acc + c.valor, 0); // 0 + 50 + 120

console.log(totalInfo); // 170
```
O `0` no final é o **valor inicial** do acumulador. Sem ele, com array de objetos, o primeiro `acc` seria o próprio objeto e o resultado ficaria errado.
</details>

---

## S8 — Encontre o bug (referência)

**Pergunta:** O programador queria uma lista com desconto **sem alterar** `produtos`, mas o original mudou. Explique por quê e corrija.

```js
const produtos = [{ nome: "Mouse", preco: 100 }];
const promo = produtos.map(p => {
  p.preco = p.preco * 0.5;
  return p;
});
```

<details><summary>Resposta</summary>

Objetos em JS são guardados por **referência**: `p` dentro do `map` não é uma cópia, é **o mesmo objeto** que está em `produtos`. Ao fazer `p.preco = ...`, o objeto original é modificado. O `map` cria um array novo, mas os objetos dentro dele são os mesmos.

Correção: criar um **objeto novo** com spread.
```js
const promo = produtos.map(p => ({ ...p, preco: p.preco * 0.5 }));
```
Copiar só o array (`[...produtos]`) **não** resolve, porque é uma cópia rasa: os objetos continuam compartilhados.
</details>

---

## S9 — Spread x Rest

**Pergunta:** Os dois usam `...`. Qual a diferença? Mostre o resultado de cada linha.

```js
const user = { nome: "Ana", senha: "123", idade: 20 };
const { senha, ...publico } = user;
const atualizado = { ...user, idade: 21 };
```

<details><summary>Resposta</summary>

- **Rest** (lado **esquerdo** do `=`, na desestruturação): **junta o que sobrou**. `senha = "123"`, `publico = { nome: "Ana", idade: 20 }`. Útil para remover um campo sensível.
- **Spread** (lado **direito**, montando algo novo): **espalha** as propriedades. `atualizado = { nome: "Ana", senha: "123", idade: 21 }`. A `idade: 21` vem depois, então sobrescreve.
- `user` continua **intacto** nos dois casos.
</details>

---

## S10 — Closure

**Pergunta:** O que é closure? Qual a saída?

```js
function criarContador() {
  let total = 0;
  return () => {
    total++;
    return total;
  };
}
const c = criarContador();
console.log(c(), c(), c());
```

<details><summary>Resposta</summary>

Saída: `1 2 3`.

**Closure** é quando uma função interna **continua tendo acesso às variáveis da função onde foi criada**, mesmo depois que essa função externa já terminou. Aqui, a arrow retornada "lembra" de `total` e cada chamada incrementa o mesmo `total`.

É o mesmo mecanismo da Q3 (`criarAjuste(taxa)`): cada função gerada guarda sua própria `taxa`.
</details>

---

## S11 — Rastreie o laço

**Pergunta:** Mostre, passo a passo, o valor de `soma` ao final.

```js
let soma = 0;
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}
```

<details><summary>Resposta</summary>

`i % 2 !== 0` = "i é ímpar".

| i | ímpar? | soma |
|---|---|---|
| 1 | sim | 1 |
| 2 | não | 1 |
| 3 | sim | 4 |
| 4 | não | 4 |
| 5 | sim | **9** |

Resultado: `9`.
</details>

---

## S12 — Corrija a condicional (estilo Q5)

**Pergunta:** O código deveria classificar: ≥9 Excelente, ≥7 Aprovado, ≥5 Recuperação, senão Reprovado. Aponte o erro e corrija.

```js
if (nota >= 9) s = "Excelente";
else if (nota < 7) s = "Aprovado";
else if (nota >= 5) s = "Recuperacao";
else s = "Reprovado";
```

<details><summary>Resposta</summary>

O erro está em `nota < 7`: deveria ser `nota >= 7`. Com o código errado, uma nota 3 cai em "Aprovado" e uma nota 7 cai em "Recuperacao".

No `if/else if` a ordem importa: ele **para no primeiro verdadeiro**, então as faixas devem ir da maior para a menor.

```js
if (nota >= 9) s = "Excelente";
else if (nota >= 7) s = "Aprovado";
else if (nota >= 5) s = "Recuperacao";
else s = "Reprovado";
```
</details>

---

## S13 — Truthy e falsy

**Pergunta:** Quais destes valores são falsy? `0`, `"0"`, `""`, `[]`, `null`, `undefined`, `NaN`, `"false"`.

<details><summary>Resposta</summary>

Falsy: `0`, `""`, `null`, `undefined`, `NaN` (e o próprio `false`).

Truthy (pegadinhas): `"0"` e `"false"` são strings **não vazias**; `[]` é um array (objeto). Todo objeto é truthy, mesmo vazio.
</details>
