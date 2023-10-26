/*
# Codando na gringa - desafios

## Encontre o Maior Elemento no Array

### Descrição do Problema

Descubra o maior elemento em um array de inteiros.

### Exemplo de Entrada

```ruby
[3, 7, 2, 8, 9, 4]
```

### Exemplo de Saída

```
O maior numero é 9
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Use um laço de repetição (como "for" ou "while") para percorrer o array
- Crie uma variável que guarde o valor do maior número a cada iteração

### Material de Apoio

- [Como encontrar o maior elemento de um Array em Java]
(https://www.guj.com.br/t/encontrar-o-maior-valor-dentro-de-um-vetor/90205/5)

###
*/
const arr = [3, 7, 2, 8, 9, 4]

function maxArr(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log('O maior valor é ' + max)
}
maxArr(arr)