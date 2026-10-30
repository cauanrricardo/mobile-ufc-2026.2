# Programação para Dispositivos Móveis — UFC Quixadá 2026.2

Repositório de estudos da disciplina QXD0276 (Prof. Nator Junior).
Cada pasta corresponde a um PDF de aula do professor.

## Como rodar

Precisa do Node.js 18 ou mais novo (por causa do `fetch`). Confira com `node --version`.

```bash
node aula-02-fundamentos/exercicios.js
node listas/lista-01/exercicios/q01-analisar-valores.js
node listas/lista-02/pratica.js
```

## Estrutura

```
mobile-ufc-2026.2/
├── README.md                          ← você está aqui (cronograma de estudo)
├── aula-02-fundamentos/               variáveis, tipos, if/switch, laços
├── aula-03-funcoes-ternario/          funções, arrow functions, ternário
├── aula-04-arrays-closures/           escopo, closures, map/filter/reduce
├── aula-05-objetos-desestruturacao/   objetos, desestruturação, spread
└── listas/
    ├── lista-01/                      subjetiva: exercicios/ + resolucoes/
    └── lista-02/                      objetiva: teoria, questões e prática
```

Cada pasta de aula tem:

- `resumo.md` — a explicação do conteúdo, com as pegadinhas.
- `exercicios.js` — os enunciados (a maioria dos slides), para você resolver.
- `solucoes.js` — as respostas, com a saída esperada em comentário.
