/*
# Codando na gringa - desafios

****Validador de Senha****

### **Dificuldade**: ⭐⭐⭐☆☆

### **Descrição do Problema**

Crie um programa que valide senhas com os seguintes critérios: pelo 
menos 8 caracteres, pelo menos uma letra maiúscula, 
pelo menos uma letra minúscula e pelo menos um número.

### **Exemplo de Entrada:**

```
"Seguranca123"
```

### **Exemplo de Saída:**

```
Senha válida
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Transforme a string em um array e itere por cada caractere
- Verifique de qual grupo é aquele caractere
- Veja se os grupos estão preenchidos corretamente e retorne se é válido ou não

### Material de Apoio

- [Transformar string em array de caracteres em javascript]
(https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres)

- [Verificar se a letra é maiúscula em javascript]
(https://backefront.com.br/verificar-string-possui-maiuscula/)


*/

const pass = "SEGURANCA123";

function validarSenha(senha) {
    const novaSenha = senha.split('');
    const temMaiusclo = (str) => /[A-Z]/.test(str);
    const temMinusculo = (str) => /[A-Z]/.test(str);
    const temNumero = (str) => /[0-9]/.test(str);
    const comprimentoMinimo = 8;

    for (let i = 0; i < novaSenha.length; i++) {
        if(novaSenha.length < comprimentoMinimo) {
            return 'Senha inválida';
        } 
        if (temMaiusclo(novaSenha)) {
            if(temMinusculo(novaSenha)){
                
                if (temNumero(novaSenha)) {
                    return 'Senha válida';
                } else {
                    return 'Falta reforçar com números'
                } 
            }
        }  else {
            return 'Falta reforçar com letras maisculas'
        }
    }
}
console.log(validarSenha(pass))



/*
function validarSenha(senha) {
    if (senha.length < 8) {
        return "Senha inválida: deve ter pelo menos 8 caracteres";
    }
    if (!/[a-z]/.test(senha)) {
        return "Senha inválida: deve conter pelo menos uma letra minúscula";
    }
    if (!/[A-Z]/.test(senha)) {
        return "Senha inválida: deve conter pelo menos uma letra maiúscula";
    }
    if (!/[0-9]/.test(senha)) {
        return "Senha inválida: deve conter pelo menos um número";
    }
    return "Senha válida";
}

// Exemplo de Entrada
var senha = "Seguranca123";

// Validar a senha e imprimir a saída
var resultado = validarSenha(senha);
console.log(resultado);

*/

