/*
# Codando na gringa - desafios

****A Cozinha Musical****

### **Dificuldade**: ⭐⭐☆☆☆

### **Descrição do Problema**

Crie um programa que simule uma cozinha onde cada ingrediente adicionado à 
receita gera uma nota musical. Por exemplo: adicionar "Tomate" toca um "Dó", 
"Cebola" toca um "Ré", etc.

### **Exemplo de Entrada:**

```
Lista de ingredientes (por exemplo, ["Tomate", "Cebola", "Alho"]).
```

### **Exemplo de Saída:**

```
Uma sequência de notas musicais (por exemplo, "Dó, Ré, Mi").
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Use a estrutura **Hash** para definir uma nota para cada receita
- Faça uma iteração no array por cada item da receita, e pegue a nota 
correspondente dentro da estrutura de **Hash**

### Material de Apoio

- [Dia 9 - Estrutura Hash]
(https://www.notion.so/9-dia-Estrutura-Hash-d96c50bebedc4a5faa3104dbb9e18742?pvs=21)

- [Como percorrer um array? (javascript)]
(https://warcontent.com/metodos-arrays-javascript/)

*/

// Objeto com os ingredientes e suas notas correspondentes
const ingredientesNotas = {
    "Tomate": "Dó",
    "Cebola": "Ré",
    "Alho": "Mi"
    // Adicione mais ingredientes e notas conforme necessário
};

// chat gpt

// Função para criar a sequência de notas musicais com base nos ingredientes
function criarSequenciaMusical(ingredientes) {
    return ingredientes.map(ingrediente => ingredientesNotas[ingrediente] || "Nota não encontrada").join(", ");
}

// Exemplo de entrada (lista de ingredientes)
const ingredientes = ["Tomate", "Cebola", "Alho"];

// Chamando a função e exibindo a sequência de notas musicais
const sequenciaMusical = criarSequenciaMusical(ingredientes);
console.log("Sequência de notas musicais: " + sequenciaMusical);