/*
# Codando na gringa - desafios


# 28° dia (07/11) - Sistema de Reservas de Hotéis

### **Dificuldade**: ⭐⭐⭐☆☆

### **Descrição do Problema**

Faça um programa para gerenciar reservas em um hotel. Use um array para representar 
os quartos disponíveis e outro para os ocupados. Permita que usuários façam reservas, 
cancelamentos e busquem por quartos vazios.

### **Exemplo de Entrada:**

```
Comandos como "reservar", "cancelar", "buscar" e detalhes da reserva.
```

### **Exemplo de Saída:**

```
Listas de quartos disponíveis e ocupados após cada operação.
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Você utilizará um **Array** de **Hashes** para montar esse sistema
- Exemplo: [{quarto: 123, reservado: false}, {quarto: 124, reservado: true}]
- As operações de busca, reserva, e cancelamento serão realizadas pelo número do quarto

### Material de Apoio

- **[Buscar um valor dentro de um array de dicionários]
(https://pt.stackoverflow.com/questions/306986/buscar-um-valor-dentro-de-um-array-de-dicion%c3%a1rios)**

### Gabarito

Estará disponível após a live do dia 12/11
*/

// Comandos como "reservar", "cancelar", "buscar" e detalhes da reserva.

const DB = [];

function reservar(numeroQuarto, reserva) {
    let hotel = {
        "quarto": numeroQuarto,
        "reserva": reserva
    }
    const newReserva = DB.push(hotel);

    return 'quarto reservado'
}


function buscar(numeroQuarto) {

    const index = DB.find(numero => numero.quarto === numeroQuarto);

    if (index == undefined) {
        return `Quarto de numero ${numeroQuarto} está vazio.`;
    }

    return `Quarto de numero ${numeroQuarto} já  reservado.`;
}

function cancelarReserva(numeroQuarto) {
    const quartoEncontrado = buscar(numeroQuarto);
    const index = DB.findIndex(numero => numero.quarto === numeroQuarto);
    if (index == -1) {
        return 'Quarto disponível para reserva.';
    }
    DB.splice(index, 1);

    return `Reserva cancelada.`
}

console.log(reservar(124, true));
console.log(reservar(126, true));
console.log(reservar(127, true));

console.log(buscar(125));
console.log(buscar(127));

console.log(DB);

console.log(cancelarReserva(125));
console.log(cancelarReserva(128));
console.log(cancelarReserva(127));

console.log(DB);

/* 
let quartosDisponiveis = [101, 102, 103, 104, 105];
let quartosOcupados = [];

function reservarQuarto(numeroQuarto) {
    if (quartosDisponiveis.includes(numeroQuarto)) {
        quartosDisponiveis = quartosDisponiveis.filter(quarto => quarto !== numeroQuarto);
        quartosOcupados.push(numeroQuarto);
        return `Reserva do quarto ${numeroQuarto} realizada com sucesso.`;
    } else {
        return `Quarto ${numeroQuarto} não disponível para reserva.`;
    }
}

function cancelarReserva(numeroQuarto) {
    if (quartosOcupados.includes(numeroQuarto)) {
        quartosOcupados = quartosOcupados.filter(quarto => quarto !== numeroQuarto);
        quartosDisponiveis.push(numeroQuarto);
        return `Reserva do quarto ${numeroQuarto} cancelada.`;
    } else {
        return `Quarto ${numeroQuarto} não está ocupado.`;
    }
}

function buscarQuartosDisponiveis() {
    return `Quartos disponíveis: ${quartosDisponiveis.join(', ')}`;
}

// Exemplos de uso:
console.log(reservarQuarto(102));
console.log(reservarQuarto(105));
console.log(cancelarReserva(102));
console.log(buscarQuartosDisponiveis());
*/