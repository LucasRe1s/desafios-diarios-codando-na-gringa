const express = require('express');
const readline = require('readline');
const app = express();

app.listen(3000, () => {
    // console.log("running")
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Viagem no Tempo:');
console.log('Você está no Egito Antigo. O que você deseja fazer?');
console.log('1. Conhecer os faraós.');
console.log('2. Explorar as pirâmides.');

rl.question('Digite o número da sua escolha: ', (escolha) => {
    if (escolha === '1') {
        console.log('Você se encontra com o Faraó Ramsés II. Ele lhe faz perguntas sobre o futuro....');
    } else if (escolha === '2') {
        console.log('Você está explorando as pirâmides. Cuidado com as armadilhas!');
    } else {
        console.log('Opção inválida. Por favor, escolha 1 ou 2.');
    }

    rl.close();
});
