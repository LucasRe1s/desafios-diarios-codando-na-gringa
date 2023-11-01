/*
# Codando na gringa - desafios

### ****Gerador de Senhas Aleatórias****

### **Descrição do Problema**

Crie um programa que gere senhas aleatórias de 8 caracteres, 
combinando letras maiúsculas, minúsculas e números.

### **Exemplo de Saída:**

```
A senha gerada é: A2bF9zP7
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Crie alguns arrays de numeros e letras
- Gere a senha baseado nesses arrays (pegando valores aleatórios)

### Material de Apoio

- [Gerar string aleatória em javascript]
(https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/)
*/

function generatePass () {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let acc = '';
    const comprimentoMinimo = 8;
    const comprimentoMaximo = 12;
    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] > comprimentoMinimo || caracteres[i] <= comprimentoMaximo) {
            acc += caracteres.charAt(Math.random() * caracteres.length)
        }  
    }
    return acc;
}

console.log(generatePass())

/* Outra forma

const minusculas = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const maiusculas = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

let senha = "";

for (let i = 0; i < 3; i++) {
  const numero = Math.floor(Math.random() * 10);
  const maiuscula = maiusculas[Math.floor(Math.random() * 26)];
  const minuscula = minusculas[Math.floor(Math.random() * 26)];

  senha = senha + numero + maiuscula + minuscula;
}

console.log(senha);

*/