/*

# Codando na gringa - desafios

Bom diaaaa!! Que seja uma ótima semana pra todo mundo (tão preparados pro eclipse)? 🤩
Vocês já ouviram falar sobre Float? Float nada mais é que um número com vírgula -> 1,5 / 2,5 / 5,5...

Desafio de hoje:

1. Peça 3 notas para o usuário inserir (P1, P2 e P3)
2. Some essas notas e imprima a média da pessoa (a média é a soma das 3 notas, dividido por 3).

Modo complexo (para não iniciantes)
Receba um arquivo CSV com as 3 notas de cada aluno e seus respectivos nomes, e no final, 
imprima a média de cada aluno baseado no que foi lido do arquivo CSV

Material de Apoio

- Float e tipos de variáveis: 
https://gaea.com.br/variaveis-programacao/#:~:text=float,dados%20ocorre%20com%20precis%C3%A3o%20simples.

- Lendo a entrada de um usuário em Javascript: 
https://celsokitamura.com.br/como-receber-dados-do-usuario-javascript/

Modo complexo (não é necessário ler caso seja iniciante):
- ler arquivo CSV em python: 
https://pt.stackoverflow.com/questions/97269/como-ler-um-arquivo-csv-em-python
*/

const calcularMedia = function(p1, p2, p3) {
    let resultado = (p1 + p2 + p3) / 3;
    console.log(resultado.toFixed(2))
}

calcularMedia(7, 5, 9);