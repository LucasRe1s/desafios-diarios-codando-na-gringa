/*

# Codando na gringa - desafios

### **Soma dos Dígitos**

### **Descrição do Problema:**

Calcule a soma dos dígitos de um número inteiro.

### **Exemplo de Entrada:**

```
12345
```

### **Exemplo de Saída:**

```
15
```

### Dica **[✨](https://emojipedia.org/pt/brilhos)**

- Tente trabalhar com os dígitos do numero, de alguma forma, você precisa separá-los

### Material de Apoio

- [Como somar os números de um inteiro em Python](https://pt.stackoverflow.com/a/199702)

*/

const numero = 12345
function somaDigitos(numero){

    soma = 0
    while (numero > 0) {
        
        // # Obtém o último dígito do número
        let digito = numero % 10
        //  Adiciona o dígito à soma
        soma += digito
        // # Remove o último dígito do número
        numero = Math.floor(numero / 10);
    }
    console.log( soma)
    return soma
}

console.log("A soma dos dígitos do número é: " + somaDigitos(numero))