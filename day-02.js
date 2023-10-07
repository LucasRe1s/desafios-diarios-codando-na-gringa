/*
Boa tarde meus devinhos e devinhas lindos!!! Segue o desafio de hoje:

1. Receba o nome do usuário como entrada
2. Imprima o nome do usuário com todas as letras em maiúsculo

=> Por favor, digite seu nome:
=> "josé da silva"

Deve imprimir:
=> "JOSÉ DA SILVA"

Modo complexo (para não-iniciantes)

Dado o nome do usuário, imprima uma mensagem de boas vindas acompanhado do nome capitalizado 
(apenas as palavras do nome em maíusculo), exemplo: Seja bem vindo, José da Silva!

Material de apoio:
https://celsokitamura.com.br/como-receber-dados-do-usuario-javascript/ - como ler a entrada do usuário 
(em javascript)

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase - como 
deixar as letras maiúsculas
*/


let nomeCompleto = "josé da silva".toLocaleUpperCase();
console.log(nomeCompleto);