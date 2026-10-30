# Atividade — Catálogo com FlatList

## O que fazer

Tudo no `App.js`:

1. Criar um array com **10 produtos**, cada um com `id`, `nome` e `preco`.
2. Mostrar o **nome e o preço** de cada produto usando `data` e `renderItem`.
3. Usar o `id` como chave com `keyExtractor`.
4. Criar um componente `ProdutoItem` para desenhar cada produto.
5. Colocar uma linha entre os itens com `ItemSeparatorComponent`.
6. Usar `ListEmptyComponent` para mostrar **"Nenhum produto cadastrado"** quando o array estiver vazio.

## Como rodar

```bash
cd atividades/catalogo-flatlist
npx expo start
```

- **Celular:** abra o app **Expo Go** e leia o QR code (o celular e o PC precisam estar no mesmo Wi-Fi).
- **Navegador:** aperte `w` no terminal.

Quando você salva o arquivo, o app atualiza sozinho.

---

## Passo a passo

Faça **um passo de cada vez**. Depois de cada passo, salve e veja o app.
Se der erro, leia a mensagem vermelha, porque ela costuma dizer a linha do problema.

**Ordem do `App.js`:** imports → array → componentes → `App` → estilos.
O array e os componentes ficam **fora** do `App` e **antes** dele.

1. **Array:** crie o array `produtos` com só 2 ou 3 produtos por enquanto.
2. **FlatList só com o nome:** importe a `FlatList`, coloque dentro do `App` com `data` e `renderItem`,
   e mostre só o `item.nome`. Se os nomes aparecerem, deu certo.
3. **Preço:** mostre também o preço com `toFixed(2)`.
4. **keyExtractor:** adicione o `keyExtractor` usando o `id`. O aviso amarelo de key tem que sumir.
5. **ProdutoItem:** crie o componente `ProdutoItem` e use no `renderItem`.
6. **Separador:** crie o componente da linha e passe no `ItemSeparatorComponent`.
7. **Lista vazia:** adicione o `ListEmptyComponent`. Teste com `data={[]}` e depois volte para `data={produtos}`.
8. **10 produtos:** complete o array até ter 10 produtos.

### JS que você vai usar (revise se precisar)

| O quê | Onde você estudou |
|---|---|
| Array e objeto `{ id, nome, preco }` | `aula-04` e `aula-05` |
| Arrow function `(item) => item.id` | `aula-03` |
| Desestruturação `({ item })` | `aula-05` |
| `.toFixed(2)` | formata número: `19.9` → `"19.90"` |

---

## Dicas (os termos explicados)

### Array de objetos

Um **array** é uma lista `[ ]`. Um **objeto** é um "pacote" de informações `{ }`.
Aqui, cada produto é um objeto, e todos eles ficam dentro de um array:

```js
const produtos = [
  { id: '1', nome: 'Caderno', preco: 19.9 },
  { id: '2', nome: 'Caneta', preco: 2.5 },
];
```

- O `id` precisa ser **diferente** em cada produto.
- Coloque o `preco` como **número** (sem aspas). Assim dá para usar `preco.toFixed(2)`, que mostra `19.90`.

### FlatList

É o componente do React Native que mostra **listas**. Você entrega o array e diz como desenhar
um item, e ela repete isso para todos. Parece o `map`, mas ela só desenha os itens que aparecem
na tela, então funciona bem mesmo com listas grandes.

Para usar, importe junto com os outros componentes:

```js
import { FlatList, StyleSheet, Text, View } from 'react-native';
```

### Props

Props são as "configurações" que você passa para um componente, como atributos no HTML:
`<FlatList data={...} renderItem={...} />`. Cada propriedade abaixo é uma prop da FlatList.

### `data`

O array que a lista vai mostrar. Exemplo: `data={produtos}`.

### `renderItem`

Uma **função** que diz como desenhar **um** item. A FlatList chama essa função para cada produto.
Ela recebe um objeto, e o produto fica dentro de `item`:

```js
renderItem={({ item }) => <Text>{item.nome}</Text>}
```

⚠️ Escreva `({ item })`, com as chaves. Sem elas, `item.nome` dá erro.

### `key` e `keyExtractor`

O React precisa de uma **chave única** para cada item da lista. É assim que ele sabe qual item
mudou, foi adicionado ou removido.
O `keyExtractor` é uma função que recebe o item e devolve qual campo é a chave:

```js
keyExtractor={(item) => item.id}
```

Se você esquecer, aparece um aviso amarelo: *"Each child in a list should have a unique key"*.

### Componente

Um componente é uma **função que devolve um pedaço da tela** (JSX). O nome começa com letra maiúscula.
Você pode criar o `ProdutoItem` no próprio `App.js`, em cima do `export default function App()`:

```js
function ProdutoItem({ produto }) {
  return (
    <View>
      <Text>{produto.nome}</Text>
    </View>
  );
}
```

Depois é só usar no `renderItem`: `<ProdutoItem produto={item} />`.
Aqui `produto={item}` é uma prop: você passa o item para o componente com o nome `produto`.

### `ItemSeparatorComponent`

É o componente que aparece **entre** um item e outro. Ele não aparece antes do primeiro nem depois
do último. Uma linha pode ser uma `View` fininha com cor de fundo:

```js
function Separador() {
  return <View style={{ height: 1, backgroundColor: '#ccc' }} />;
}
```

Passe o componente **sem** `< />`: `ItemSeparatorComponent={Separador}`.

### `ListEmptyComponent`

É o que aparece quando o array está **vazio**. Aqui você pode passar o JSX direto:
`ListEmptyComponent={<Text>...</Text>}`.

**Para testar:** troque `data={produtos}` por `data={[]}`. A mensagem tem que aparecer.

---

## Checklist

- [ ] 10 produtos, cada um com `id` diferente
- [ ] Nome e preço aparecem na tela
- [ ] `keyExtractor` usando o `id` (sem aviso amarelo de key)
- [ ] Componente `ProdutoItem` criado e usado no `renderItem`
- [ ] Linha entre os itens
- [ ] Com `data={[]}` aparece "Nenhum produto cadastrado"
