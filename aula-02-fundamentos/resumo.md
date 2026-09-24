# Aula 02 — Fundamentos de JavaScript

Você já sabe lógica. Aqui a ideia é só aprendeaula-05-objetos-desestruturacr **como o JS escreve** o que você já conhece.

## Rodando código

JavaScript roda no navegador e também fora dele, com o **Node.js**.
Você cria `arquivo.js` e roda `node arquivo.js` no terminal. O `console.log()` é o "print".

## Variáveis: `const`, `let` e `var`

```js
const nome = "Ana"; // não pode receber outro valor depois
let idade = 20; // pode mudar: idade = 21
var antigo = 1; // jeito antigo, evite
```

Regra prática: comece com `const`. Troque para `let` só se precisar reatribuir.

## Tipos

| Tipo      | Exemplo            | Observação                    |
| --------- | ------------------ | ----------------------------- |
| Number    | `42`, `99.99`      | não existe int/float separado |
| String    | `"João"`, `'João'` | aspas simples ou duplas       |
| Boolean   | `true`, `false`    |                               |
| undefined | `let x;`           | declarada, mas sem valor      |
| null      | `let x = null;`    | "vazio de propósito"          |

JS tem **tipagem dinâmica**: a mesma variável pode guardar um número e depois um texto.
E diferencia maiúsculas: `idade` e `Idade` são variáveis diferentes.

## Template string (crase)

```js
const nome = "Ana";
console.log(`Olá, ${nome}!`); // Olá, Ana!
console.log(`2 + 3 = ${2 + 3}`); // 2 + 3 = 5
```

Só funciona com **crase** (`` ` ``). Com aspas normais, o `${}` aparece como texto.

## Operadores

- Aritméticos: `+ - * / %` (o `%` é o resto da divisão: `10 % 3` dá `1`).
- Atribuição: `x += 5` é o mesmo que `x = x + 5`.
- Comparação: `> < >= <=`.

### A pegadinha mais clássica: `==` vs `===`

```js
5 == "5"; // true  → compara só o valor (converte o tipo)
5 === "5"; // false → compara valor E tipo
```

Use sempre `===` e `!==`. Na prova, se aparecer `==`, desconfie.

## Condicionais

```js
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

```js
switch (operacao) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  default:
    console.log("Operação inválida");
}
```

Sem o `break`, o switch **continua executando os cases de baixo**. Erro clássico de prova.

## Laços

```js
for (let i = 0; i < 5; i++) {} // quando você sabe quantas vezes
while (contador < 5) {
  contador++;
} // enquanto a condição for verdadeira
for (const fruta of frutas) {
} // percorre cada item da lista
```

O `for...of` é o mais usado para listas: você pega o item direto, sem índice.

## Funções (primeiro contato)

```js
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
const msg = saudacao("Carlos");
```

## Pegadinhas desta aula

- `==` vs `===`.
- Esquecer o `break` no `switch`.
- O slide usa `prompt()` no do...while. Isso **não existe no Node**, só no navegador.
- Template string precisa de crase.

## Minhas anotações de erros

(escreva aqui o que você errou nos exercícios)
