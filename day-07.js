/*
# Codando na gringa - desafios

Bom diaaa!!! Bom feriado pra vocês  ✨

Hoje vamos aprender o que é uma função (ler material de apoio)

Desafio de hoje:

1. Crie uma função que recebe dois parametros, nome e idade
2. Imprima esses valores no formato: "nome, idade"

Modo complexo (para não-iniciantes)

Crie uma função recursiva que receba varios nomes e idades e imprima-os

Material de apoio

O que é função? https://www.alura.com.br/apostila-python-orientacao-a-objetos/funcoes
*/

function nameIdade (nome, idade) { 
    return `${nome}, ${idade}`
}

console.log(nameIdade("Lucas", 26));
console.log(nameIdade("Mary", 28));
console.log(nameIdade("Gabriel", 6));
console.log(nameIdade("Luis", 23));
console.log(nameIdade("João", 16));