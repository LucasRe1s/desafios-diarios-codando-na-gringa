/*
# Codando na gringa - desafios

# 30° dia - ****Lista de Compras****

### **Dificuldade**: ⭐☆☆☆☆

### **Descrição do Problema**

Escreva um programa que cria uma lista de compras simples.

### **Exemplo de Entrada:**

```
Itens de compras inseridos pelo usuário até que ele digite 'sair'

Maçã
Pão
sair
```

### **Exemplo de Saída:**

```
Lista de Compras: Maçã, Pão
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Basicamente você irá adicionar os inputs do usuário em um Array
- Utilize o loop “while” até o usuário digitar ‘sair’

### Material de Apoio

- [Como usar o while e laços de repetição]
(https://www.freecodecamp.org/portuguese/news/tutorial-de-lacos-while-em-python-exemplos-de-sintaxe-while-true-e-lacos-infinitos/)

### Gabarito

Estará disponível após a live do dia 12/11

*/

function listaDeCompras (item) {
    let carrinho = [];

    while (item == 'sair') {
        return 'saindo...'
    }
    carrinho.push(item)
    
    return carrinho;
}

console.log(listaDeCompras('maça'));
console.log(listaDeCompras('pão'));
console.log(listaDeCompras('sair'));

/*
const listaDeCompras = [];

function criarListaDeCompras() {
    let item;
    
    while (true) {
        item = prompt("Insira um item de compra (ou 'sair' para finalizar):");

        if (item.toLowerCase() === 'sair') {
            break;
        }

        listaDeCompras.push(item);
    }

    return listaDeCompras;
}

function exibirListaDeCompras() {
    console.log(`Lista de Compras: ${listaDeCompras.join(', ')}`);
}

criarListaDeCompras();
exibirListaDeCompras();

*/