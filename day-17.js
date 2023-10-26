/*
# Codando na gringa - desafios

### Contagem de Vogais

### **Descrição do Problema**

Conte quantas vogais (inclusive com acentuações) existem em uma string.

### **Exemplo de Entrada:**

```
"programação"
```

### **Exemplo de Saída:**

```
5 vogais
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Crie um Array contendo as vogais
- Crie um Array de caracteres a partir da String
- Veja se o Array de vogais contém aquele caractere, e adicione a um contador

*/

function contarVogais (palavra) {
    var totalVogal = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < palavra.length; i++ ) {
        if(vogais.indexOf(palavra[i]) != -1) {
            totalVogal++;
        }
    }
    return totalVogal;
}

console.log(contarVogais('programação'))

