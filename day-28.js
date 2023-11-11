/*
# Codando na gringa - desafios

# ****Monitoramento de Temperatura Ambiental****

### **Dificuldade**: ⭐⭐☆☆☆

### **Descrição do Problema**

Desenvolva um programa que monitora a temperatura de uma sala ao longo do dia. 
Armazene as leituras de temperatura em um array e use loops para calcular a média, 
a temperatura mais alta e a mais baixa.

### **Exemplo de Entrada:**

```
Temperaturas registradas ao longo do dia, exemplo: [27.6, 32.3, 29.5]
```

### **Exemplo de Saída:**

```
Média de temperatura, temperatura mais alta e mais baixa.
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Veja como calcular a média de números de um array
- Veja como pegar o maior número de um array
- Veja como pegar o menor número de um array

### Material de Apoio

- Use as dicas e pesquise o que for necessário 😉

### Gabarito

Estará disponível após a live do dia 12/11
*/

const temperaturasRegistradas = [27.6, 32.3, 29.5];

function mediaTemperaturas (arr) {
    let soma = 0;
    const calcula = arr.forEach(temperatura => {
        soma += temperatura;
    });
    let media = soma / arr.length
    console.log('A média das temperaturas é: ' + media);

}

function temperaturaMaxima (arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log('Temperatura mais alta: ' + max)
}

function temperaturaMinima (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log('Temperatura mais baixa: ' + min)
}


mediaTemperaturas(temperaturasRegistradas);
temperaturaMaxima(temperaturasRegistradas);
temperaturaMinima(temperaturasRegistradas);

/* Outra resolução


function calcularEstatisticas(arr) {
    if (arr.length === 0) {
        console.log('O array está vazio. Não há estatísticas para calcular.');
        return;
    }

    let soma = 0;
    let min = arr[0];
    let max = arr[0];

    arr.forEach(temperatura => {
        soma += temperatura;
        if (temperatura > max) {
            max = temperatura;
        }
        if (temperatura < min) {
            min = temperatura;
        }
    });

    let media = soma / arr.length;
    console.log('Média de temperaturas: ' + media);
    console.log('Temperatura mais alta: ' + max);
    console.log('Temperatura mais baixa: ' + min);
}

const temperaturas = [25, 30, 20, 35, 18];
calcularEstatisticas(temperaturas);
*/