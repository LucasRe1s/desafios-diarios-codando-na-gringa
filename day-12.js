/*
# Codando na gringa - desafios

Boa tarde!! Vamos falar mais sobre Hash?

Desafio de hoje

1. Caso não tenha visto/feito o exerício de ontem, veja no material de apoio o que é uma estrutura de Hash
2. Dado qualquer hash com nome, idade e profissão, mude o valor do hash da profissão para programador 
e imprima o hash

Exemplo:

hash = { nome: 'Michael', idade: 40, profissao: 'Gerente' }

Deve retornar:
{ nome: 'Michael', idade: 40, profissao: 'Programador' }

Modo complexo (para não-iniciantes)

Receba um array de hashes e mude os dados desses hashs baseado no critério passado por parametro 
(esse parametro pode ser a combinação de chave e valor para ser verificado no hash e modificá-lo, 
    caso não exista, adicione esses valores nos hashes)


Material de apoio

- O que é a estrutura de hash? - https://www.tutorialspoint.com/python_data_structure/python_hash_table.htm
*/

const hash = {nome: 'Michael', idade: 40, profissao: 'Gerente'}
hash.profissao = 'Programador'
console.log(hash)