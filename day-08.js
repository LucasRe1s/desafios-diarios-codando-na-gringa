/*
# Codando na gringa - desafios

Boa noite!! Hoje o desafio veio atrasado, porque tava me 
preparando pra amanhã 
(live da correção dos exercícios) 😍

Desafio de hoje:

1. Agora que você já sabe o que é uma função, crie uma função 
que receba um parametro em metros e converta para milimetros, 
ex: 1 metro = 1000 milimetros

Modo complexo (para não-iniciantes)

Faça a conversão de qualquer unidade de medida de distancia, volume e numerais

Material de apoio
O que é função? (reforço) - https://www.alura.com.br/apostila-python-orientacao-a-objetos/funcoes
*/

function converteMetrosEmMilimetros(metros){
    const metrosEmMilimetros = metros * 1000;
    return `${metros} metros = ${metrosEmMilimetros} milimetros`;
}

console.log(converteMetrosEmMilimetros(2));
console.log(converteMetrosEmMilimetros(5));
console.log(converteMetrosEmMilimetros(25));
console.log(converteMetrosEmMilimetros(121));