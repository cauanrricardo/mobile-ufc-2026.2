# Programação para Dispositivos Móveis — UFC Quixadá 2026.2

Repositório de estudos da disciplina QXD0276 (Prof. Nator Junior).
Cada pasta corresponde a um PDF de aula do professor.

## Como rodar

Precisa do Node.js 18 ou mais novo (por causa do `fetch`). Confira com `node --version`.

```bash
node aula-02-fundamentos/exercicios.js
node aula-02-fundamentos/solucoes.js
node aula-08-modularizacao/tarefas/app.js
```

O `package.json` tem `"type": "module"`. Sem isso, o Node não aceita `import`/`export`
e dá o erro `Cannot use import statement outside a module`.

## Estrutura

```
mobile-ufc/
├── README.md               ← você está aqui (cronograma de estudo)
├── simulado-ap1.md         ← questões no estilo da prova, com gabarito
├── package.json
├── aula-02-fundamentos/            variáveis, tipos, if/switch, laços
├── aula-03-funcoes-ternario/       funções, arrow functions, ternário
├── aula-04-arrays-closures/        escopo, closures, map/filter/reduce
├── aula-06-objetos-desestruturacao/ objetos, desestruturação, spread
├── aula-07-spread-rest-fetch/      rest, fetch em APIs reais
└── aula-08-modularizacao/          import/export, service
```

Cada pasta de aula tem:

- `resumo.md` — a explicação do conteúdo, com as pegadinhas.
- `exercicios.js` — os enunciados (a maioria dos slides), para você resolver.
- `solucoes.js` — as respostas, com a saída esperada em comentário.

## Como estudar cada aula (≈ 1h a 1h30)

1. Leia o `resumo.md` (10 min).
2. Resolva o `exercicios.js` **sem olhar** a solução. Rode com `node`.
3. Compare com o `solucoes.js`. Onde errou, anote no fim do `resumo.md`.
4. Feche tudo e explique em voz alta um exercício. A prova pede para
   *explicar* e *corrigir* código, não só escrever.
5. Faça um commit: `git commit -m "aula 03: exercicios feitos"`.

Dica de QA: trate a saída esperada de cada exercício como um caso de teste.
Se o seu `console.log` não bater com o comentário, o teste falhou.

## Cronograma até a AP1 (30/09, 18h)

| Dia | Data | Conteúdo | Pasta |
|---|---|---|---|
| 1 | Qui 24/09 | Fundamentos + funções, arrow, ternário | aula-02, aula-03 |
| 2 | Sex 25/09 | Arrays, map/filter/reduce, closures | aula-04 |
| 3 | Sáb 26/09 | Objetos, desestruturação, spread/rest, fetch | aula-06, aula-07 |
| 4 | Dom 27/09 | Modularização + promises/async/await + Express | aula-08 + slides pendentes |
| 5 | Seg 28/09 | JSX, componentes, props, Hooks | slides pendentes |
| 6 | Ter 29/09 | `simulado-ap1.md` + refazer o que errou | tudo |
| — | Qua 30/09 | Só reler os `resumo.md`. Prova às 18h | — |

O dia 2 é o mais importante: `map`, `filter` e spread aparecem o tempo todo em React.

## Pendente

- [ ] Slides de promises/async/await
- [ ] Slides de Node.js + Express (rotas e métodos HTTP)
- [ ] Slides de JSX, componentes, props e Hooks
