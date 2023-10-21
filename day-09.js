/*
# Codando na gringa - desafios

Bom dia!!! Vamos falar um pouco mais sobre arrays?

Desafio de hoje:

1. Aprenda a percorrer elementos de um array - veja o material de apoio

2. Agora que você já sabe percorrer um array, use o operador de igualdade (==) para 
verificar verifique se nesse array possui algum número (lembrando que dependendo da linguagem 
o array pode ter vários tipos de dados)

Exemplo:

Dado o array [1, 2, 'teste']
=> deve retornar "não tem o número 4"

Enquanto:

Dado o array [5, 'abacaxi', 4]
=> deve retornar "tem o número 4"

Modo complexo (para não-iniciantes)

Remova todos os valores do array que forem passados por parametro

Material de apoio

Como percorrer um array? (javascript) - https://warcontent.com/metodos-arrays-javascript/
*/
const arr = [5, 'abacaxi', 4, 7, 9, 3, 55]

function acharNumeroIgual(numero){
    for(let i =0; i < arr.length; i++){
        if(numero == arr[i]) {
            return `Tem o numero ${numero}`;
        };
    } 
    return `Não tem o numero ${numero}`;
}

// includes
function acharNumeroIgual(numero, arr) {
    if (arr.includes(numero)) {
        return `Tem o número ${numero}`;
    } else {
        return `Não tem o número ${numero}`;
    }
}

// find
function acharNumeroIgual(numero, arr) {
    const encontrado = arr.find(elemento => elemento === numero);
    if (encontrado !== undefined) {
        return `Tem o número ${numero}`;
    } else {
        return `Não tem o número ${numero}`;
    }
}

// indexOf
function acharNumeroIgual(numero, arr) {
    if (arr.indexOf(numero) !== -1) {
        return `Tem o número ${numero}`;
    } else {
        return `Não tem o número ${numero}`;
    }
}

console.log(acharNumeroIgual(4));
console.log(acharNumeroIgual(8));
console.log(acharNumeroIgual('batata'));
console.log(acharNumeroIgual(9));