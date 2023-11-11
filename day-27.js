/*
# Codando na gringa - desafios

# ****Playlist Personalizada****

### **Dificuldade**: ⭐⭐☆☆☆

### **Descrição do Problema**

Crie um programa que permite ao usuário construir uma playlist de músicas. Utilize 
um array para armazenar as músicas, e loops para permitir que o usuário adicione, 
remova, ou visualize a playlist.

### **Exemplo de Entrada:**

```
Ações como "Adicionar", "Remover", "Visualizar", os nomes das músicas.
```

### **Exemplo de Saída:**

```
Lista atualizada da playlist.
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Estude sobre a estrutura Array e como adicionar itens em um array, remover, etc…

### Material de Apoio

- [O que é um Array?](https://developer.mozilla.org/pt-BR/docs/Glossary/Array)

### Gabarito

Estará disponível após a live do dia 12/11
*/


const data = [];

function addMusic(name) {
    const add = data.push(name);
    return add;
}

function getMusic() {
    return data;
}

async function removeMusic(name) {
    const indexToRemove = data.findIndex(nome => nome === name);

    if (indexToRemove !== -1) {
        data.splice(indexToRemove, 1);
        console.log(`Música ${name} removida com sucesso.`);
    } else {
        console.log(`Música ${name} não encontrada.`);
    }
}

console.log(getMusic());


addMusic('ministerio zoe - filho prodigo');
addMusic('ministerio zoe - no silencio');
addMusic('ministerio zoe - Salmo 126');

console.log(data);
console.log('remove');

removeMusic('ministerio zoe - no silencio');
console.log(data);