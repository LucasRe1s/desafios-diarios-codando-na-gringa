/*
# Codando na gringa - desafios

## Soma dos Números Pares

### Descrição do Problema

Escreva um programa que solicite ao usuário um número inteiro positivo e calcule a soma de 
todos os números pares menores ou iguais a esse número.

### Exemplo de Entrada
```
Digite um número inteiro positivo: 10
```

### Exemplo de Saída
```
A soma dos números pares até 10 é 30.
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

Após receber o número, você pode criar um **Array (Vetor)** e depois passar por cada posição 
do **Array** fazendo a soma dos números pares.
### Material de Apoio

- [Como somar um array de números em Javascript]
(https://alexandrecardoso.dev.br/como-somar-um-array-de-numeros-com-o-javascript/)

- [Como descobrir se o número é par em programação]
(https://www.guj.com.br/t/exercicio-de-numeros-pares-em-c/410103)
*/


function somaPares(num) {

    if (num >= 0 ) {
        let soma = 0;
        for (let i = 2; i <= num; i += 2) {
          soma += i;
        }
        return soma
    }
}
/*
if (num >= 0) {
  let soma = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
}
*/
console.log(somaPares(10))