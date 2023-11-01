/*
# Codando na gringa - desafios

### ****Contagem de Números Positivos e Negativos****

### **Descrição do Problema**

Conte quantos números positivos e negativos existem em um array de inteiros.

### **Exemplo de Entrada:**

```
[-2, 5, -6, 8, 0, -1, 3]
```

### **Exemplo de Saída:**

```
Positivos: 4
Negativos: 3
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Use o condicional if pra verificar se o número é maior ou menor que zero
- Utilize um contador pra armazenar os números negativos e outro pros números positivos

### Material de Apoio

- [Usando if/else em javascript]
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

*/

const arr = [-2, 5, -6, 8, 0, -1, 3]

function positivoNegativo (arr) {
    let nNegativos = 0;
    let nPositivos = 0;

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            nNegativos += 1
        } else if (arr[i] >= 0) {
            nPositivos += 1
        }
    }
    return ( `total de numeros positivos ${nPositivos}, total de numeros negativos ${nNegativos}`)
}

console.log(positivoNegativo(arr))