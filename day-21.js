/*
# Codando na gringa - desafios

### ****Contador de Vezes****

### **Descrição do Problema**

Crie um programa que conte quantas vezes uma letra específica aparece em uma frase.

### **Exemplo de Entrada:**

```
"Felizmente, funciona."
Letra: 'a'
```

### **Exemplo de Saída:**

```
4
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Transforme a string em um array e itere nele
- Veja se a letra informada é igual a letra que está sendo iterada (utilize um contador para 
somar as vezes que a letra aparece)

### Material de Apoio

- [Transformar string em array de caracteres em javascript]
(https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres)

*/

const string = "Felizmente, funciona."


const array = string.split('');

// console.log(array)
function verificarLetra (str, arr) {

    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        if(array.includes(str)) {
            if(str == arr[i]) {
                soma += 1;
            }
        }
    }
    return soma;
}

console.log(verificarLetra("i", array))