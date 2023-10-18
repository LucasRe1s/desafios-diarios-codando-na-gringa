/*
# Codando na gringa - desafios

Boa tarde!! Hoje o exercício vai ser a mistura de dois conceitos Array e Hash

Desafio de hoje

1. Dado o array de Strings: ["nome", "corretora abc", "tipo", "empresa", "negocio", "aluguel e vendas"]

2. Transforme esse array em um hash, obs: O array já está disposto na sequencia de chave e valor

Exemplo: para o array informado, o retorno deverá ser o Hash:

=> { nome: "corretora abc", tipo: "empresa", negocio: "aluguel e vendas" }

Modo complexo (para não-iniciantes)

Receba diferentes arrays da mesma forma (sequência de chave e valor) e torne todos os arrays 
recebidos em um único hash (se houver chave repetida, manter a que foi adicionada primeiro)

Material de apoio

- Converter array de Strings em hash (ruby) - https://www.delftstack.com/howto/ruby/ruby-convert-array-to-hash/
*/

const arr = ["nome", "corretora abc", "tipo", "empresa", "negocio", "aluguel e vendas"];

const obj = arr.reduce((acumulador, elementoAtual, index, array) => {
    if(index % 2 == 0) {
        acumulador[elementoAtual] = array[index +1];
    }
    return acumulador;
}, {})

console.log(obj);