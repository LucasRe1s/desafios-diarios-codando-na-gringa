/*
# Codando na gringa - desafios

## **Tabuada de Multiplicação**

### Descrição do Problema

Crie um programa que solicita ao usuário um número inteiro e gera a tabuada de multiplicação 
desse número até 10, exibindo-a na tela.

### Exemplo de Entrada

```
Digite um número inteiro positivo: 8
```

### Exemplo de Saída

```
8x1 = 8
8x2 = 16
8x3 = 24
....
8x10 = 80
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Use um laço de repetição (como "for" ou "while") para gerar a tabuada.
- Realize operações de multiplicação dentro do laço.
- Exiba os resultados a cada iteração do laço.

### Material de Apoio

- [Como usar um laço for em javascript]
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
*/

function tabuada (num) {
    let resultado = 0
    for(let i = 0; i <= 10; i++){

        resultado = num * i
        console.log(`${num} x ${i} = ${resultado}`)
    }
}

tabuada(8)