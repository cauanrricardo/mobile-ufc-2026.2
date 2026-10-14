# Lista de Exercícios II — JavaScript · Node.js

QXD0253 · UFC Campus Quixadá · 2026.2

| Arquivo | O que tem |
|---|---|
| `README.md` | Teoria do zero + gabarito comentado (este arquivo) |
| `questoes.js` | As 21 questões rodando no Node, com comentários linha a linha |
| `exercicios-subjetivos.md` | Questões discursivas no estilo de prova + respostas |
| `pratica.js` | 15 exercícios para completar, com testes automáticos (✅/❌) |
| `solucoes.js` | Solução comentada da prática (só depois de tentar!) |

Para rodar:

```bash
node questoes.js   # vê as 21 questões executando
node pratica.js    # treina: complete as funções até ficar tudo ✅
node solucoes.js   # confere as respostas
```

---

## Parte 1 — Teoria (o que cai)

### 1. Variáveis: `let` e `const`

```js
let pontos = 8;   // pode ser reatribuída
pontos = 12;      // ok

const taxa = 2;   // NÃO pode ser reatribuída
// taxa = 3;      // TypeError
```

**Pegadinha clássica (Q11-IV):** `const` trava a *variável*, não o *conteúdo* do objeto.

```js
const produto = { preco: 100 };
produto.preco = 200;  // PERMITIDO
// produto = {};      // PROIBIDO
```

**Ordem importa (Q1):** o código roda de cima para baixo. Se uma linha muda `pontos`, a linha seguinte já enxerga o valor novo.

---

### 2. Tipos e comparação: `==` x `===` (Q2, Q12, Q14)

| Operador | Converte tipo? | `5 == "5"` | `5 === "5"` |
|---|---|---|---|
| `==` (igualdade frouxa) | Sim | `true` | — |
| `===` (igualdade estrita) | Não | — | `false` |

Regra de ouro: **use sempre `===`**.

**O `+` com string concatena (Q12):**

```js
"4" + 2          // "42"  (texto grudado)
Number("4") + 2  // 6
"4" * 2          // 8     (só o + concatena; -, *, / convertem para número)
```

---

### 3. Condicionais (Q5, Q15, Q16)

**if / else if / else:** testa de cima para baixo e **para no primeiro verdadeiro**.

```js
const nota = 7;
if (nota >= 9)      { ... }   // falso
else if (nota < 7)  { ... }   // 7 < 7 é FALSO (pegadinha!)
else if (nota >= 5) { ... }   // verdadeiro -> entra aqui e para
```

**Ternário** — um if/else em uma linha:

```js
condicao ? valorSeVerdadeiro : valorSeFalso
const msg = idade >= 18 ? "Sim" : "Não";
```

**Truthy / Falsy** — valores que viram `false` num teste:
`false`, `0`, `""` (string vazia), `null`, `undefined`, `NaN`. **Todo o resto é truthy** (incluindo `"0"`, `[]`, `{}`).

**Dupla negação (Q7):** `!(!x)` é igual a `x` em valor lógico. `!` inverte, `!!` volta.

---

### 4. Funções e Arrow Functions (Q1, Q8, Q13, Q17, Q20)

```js
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function — com corpo { } precisa de return
const soma2 = (a, b) => {
  return a + b;
};

// Arrow function — sem { } o retorno é IMPLÍCITO
const soma3 = (a, b) => a + b;

// Um único parâmetro: parênteses opcionais
const dobro = x => x * 2;
```

**Pegadinha (Q8) — retornar objeto em arrow:**

```js
const f = nome => { nome: nome };   // ERRADO: { } vira bloco -> retorna undefined
const g = nome => ({ nome: nome }); // CERTO: parênteses dizem "isso é um objeto"
```

**Hoisting (Q13):** funções declaradas com `function nome()` podem ser chamadas até antes da linha onde foram escritas. Arrow functions em `const` não.

---

### 5. Closure (Q3)

Uma função criada dentro de outra **lembra das variáveis** de onde nasceu, mesmo depois da função externa terminar.

```js
function criarAjuste(taxa) {
  return function (valor) {
    return valor * taxa;   // "lembra" de taxa
  };
}
const aumenta10 = criarAjuste(1.1);
aumenta10(200); // 220
```

Por isso a alternativa B da Q3 ("perdem o acesso a taxa") é falsa.

---

### 6. Arrays e seus métodos (Q3, Q6, Q9, Q11, Q18, Q19, Q21)

**Métodos que MODIFICAM o array original (Q19):**

| Método | Faz o quê | Onde |
|---|---|---|
| `push(x)` | adiciona | **fim** |
| `pop()` | remove | **fim** |
| `unshift(x)` | adiciona | **início** |
| `shift()` | remove | **início** |

Macete: `push`/`pop` são curtos e mexem no fim; `shift`/`unshift` mexem no começo.

**Métodos que CRIAM um array novo (não mexem no original):**

```js
const nums = [1, 2, 3, 4];

nums.map(n => n * 2);         // [2, 4, 6, 8]   transforma cada item (mesmo tamanho)
nums.filter(n => n > 2);      // [3, 4]         mantém só os que dão true
nums.reduce((acc, n) => acc + n, 0); // 10      junta tudo em um valor só
```

Como o `reduce` funciona passo a passo:

| volta | acc | n | acc + n |
|---|---|---|---|
| 1 | 0 (valor inicial) | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | **10** |

**Encadeamento (Q3, Q21):** `filter().map()` — o `map` recebe o array **já filtrado**. Então o `indice` do map é o índice do array novo (0, 1, 2...), **não** o do original.

---

### 7. Objetos, Spread e Rest (Q3, Q4, Q10, Q21)

**Spread `...`** espalha as propriedades num objeto **novo**:

```js
const p = { nome: "Teclado", preco: 100 };
const novo = { ...p, preco: 120 };  // copia tudo, depois sobrescreve preco
// p continua { nome: "Teclado", preco: 100 }
```

A ordem importa: o que vem **depois** sobrescreve.

**Rest na desestruturação** — separa uma propriedade e junta o resto:

```js
const { estoque, ...dados } = { nome: "Mouse", preco: 50, estoque: 4 };
// estoque = 4
// dados   = { nome: "Mouse", preco: 50 }   <- objeto NOVO, original intacto
```

**Referência (Q4) — o bug mais importante da lista:**

```js
const promocao = produtos.map(p => {
  p.preco = p.preco * 0.8;  // p é O MESMO objeto do array original!
  return p;
});
// produtos foi alterado sem querer
```

Objetos são passados por **referência**: a variável guarda um "endereço", não uma cópia. Para não alterar o original, crie um objeto novo com `{ ...p, preco: ... }`.

Copiar o array com `[...produtos]` **não resolve**: o array é novo, mas os objetos dentro dele continuam sendo os mesmos (cópia rasa). Por isso a alternativa C da Q4 é errada.

---

### 8. Laços `for` (Q9)

```js
for (let i = 0; i < 3; i++) {     // i = 0, 1, 2
  for (let j = 0; j < 3; j++) {   // para CADA i, j roda 0, 1, 2
    // executa 9 vezes no total
  }
}
```

`%` é o resto da divisão: `(i + j) % 2 === 0` significa "i + j é par".

---

## Parte 2 — Gabarito comentado

| Q | Resp. | Por quê (em uma linha) |
|---|---|---|
| 01 | **C** 33 | pontos=12, bonus=12-3=9 → 12×2+9 = 33 |
| 02 | **E** false, false, false | a entrada é "51", não "21"; nada é igual a 21 |
| 03 | **A** | closure funciona; índices do map são do array filtrado (0,1,2) → 50+220+96 = 366 |
| 04 | **B** | só criando objeto novo com spread o original não muda |
| 05 | **C** Recuperacao | 7 < 7 é falso; cai no `nota >= 5` |
| 06 | **C** | map cria array novo; `precos`=[30,40,50], `atualizados` intacto |
| 07 | **C** 2 | `!!ativo` = ativo; Ana e Carlos |
| 08 | **C** undefined | `{ }` virou bloco de código, sem return |
| 09 | **A** [1,6,3] e 10 | ver rastreio abaixo |
| 10 | **B** 100, 5, 120, 3 | spread cria cópia; mudar a cópia não afeta o original |
| 11 | **B** V-F-V-V | filter não modifica o original |
| 12 | **C** 42 e 6 | `"4" + 2` concatena |
| 13 | **A** 5 | soma simples |
| 14 | **C** | `==` converte tipo, `===` não |
| 15 | **A** Sim | 18 >= 18 é true |
| 16 | **A** Olá, Carlos! | "Carlos" é truthy |
| 17 | **B** 20 | 4 × 5 |
| 18 | **C** [1,4,9,16,25] | cada número ao quadrado |
| 19 | **A** 1-B, 2-D, 3-A, 4-C | push fim+, pop fim−, shift início−, unshift início+ |
| 20 | **A** | arrow com retorno implícito; as outras têm erro de sintaxe |
| 21 | **A** 3, 135 e 150 | filtra o Monitor; resultado[1] = Teclado com 10% off; original intacto |

### Rastreio da Q9 (faça isso na mão na prova!)

`operacoes = [+1, ×2, −2]`, `valores = [2, 3, 4]`. Só aplica quando `i + j` é par.

| i | j | i+j | par? | valores[i] |
|---|---|---|---|---|
| 0 | 0 | 0 | sim | 2 + 1 = **3** |
| 0 | 1 | 1 | não | 3 |
| 0 | 2 | 2 | sim | 3 − 2 = **1** |
| 1 | 0 | 1 | não | 3 |
| 1 | 1 | 2 | sim | 3 × 2 = **6** |
| 1 | 2 | 3 | não | 6 |
| 2 | 0 | 2 | sim | 4 + 1 = **5** |
| 2 | 1 | 3 | não | 5 |
| 2 | 2 | 4 | sim | 5 − 2 = **3** |

Resultado: `[1, 6, 3]`, soma = **10**.

### Rastreio da Q3

1. `filter` → `[Mouse(50), Monitor(200), Headset(80)]`
2. `map` com índice 0, 1, 2:
   - Mouse: `ajustes[0]` (×1) → 50
   - Monitor: `ajustes[1]` (×1.1) → 220
   - Headset: `ajustes[2]` (×1.2) → 96
3. `reduce` → 50 + 220 + 96 = **366**
