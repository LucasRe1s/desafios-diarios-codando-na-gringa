/*
# Codando na gringa - desafios

Boa tardeeee!!! Animados pro feriado??

Desafio de hoje:

1. Receba 3 valores (numeros inteiros) do usuário
2. Imprima eles em ordem crescente

Modo complexo (para não iniciantes)

1. Receba N valores e imprima-os em ordem crescente

Material de Apoio

- Ler dados de entrada em javascript: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt
- Operadores de comparação javascript: https://www.alura.com.br/artigos/operadores-matematicos-em-javascript

*/
const arr = [66, 555, 262]

function printInAscendingOrder(arr) {
    arr.sort((a, b) => {
       return a - b;
    })
    return arr;
}

console.log(printInAscendingOrder(arr));