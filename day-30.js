/*
# Codando na gringa - desafios

# 29° dia (08/11) - Simulador de Dado

### **Dificuldade**: ⭐☆☆☆☆

### **Descrição do Problema**

Escreva um programa que simula o lançamento de um dado, mostrando os resultados.

### **Exemplo de Entrada:**

```
Lançamentos: 5
```

### **Exemplo de Saída:**

```
4, 2, 1, 6
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Basicamente você irá gerar um número aleatório de 1 a 6 por X vezes (entrada do usuário)
- Utilize o for ou qualquer outro loop para rodar o dado X vezes

### Material de Apoio

- [Gerar números aleatórios em Python]
(https://awari.com.br/como-usar-o-python-random-para-gerar-numeros-aleatorios)

### Gabarito

Estará disponível após a live do dia 12/11

*/

function dado(lancamentos) {
    let resultado = [];

    if (lancamentos == 0 || lancamentos < 0) return "Insira um valor acima de zero.";

    for (let i = 0; i < lancamentos; i++) {

        let resultadoLancamento = Math.floor(Math.random() * 6) + 1;
        resultado.push(resultadoLancamento);
    }
    return resultado;
}

console.log(dado(5));
console.log(dado(15));