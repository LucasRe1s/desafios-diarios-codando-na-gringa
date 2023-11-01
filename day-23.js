/*
# Codando na gringa - desafios

****Gerador de Frases****

### **Dificuldade**: ⭐⭐⭐☆☆

### **Descrição do Problema**

Crie um programa que gere frases aleatórias combinando palavras de diferentes categorias.

### **Exemplo de Entrada:**

```
(Sem Entrada)
```

### **Exemplo de Saída:**

```
"O gato preto saltou sobre o muro."
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Crie diferentes categorias de palavras em arrays, 
exemplo: animais = [”gato”, “cachorro”, “porco-espinho”], cores = [”vermelho”, “preto”], etc…

- Acesse os valores desses arrays de forma aleatória
- Junte cada palavra sequencialmente para que forme uma frase (animal primeiro, depois cor, etc..)

### Material de Apoio

- [Gabarito do dia 18 sobre acessar valores aleatórios em array]
(https://www.notion.so/5544a27683fd46f98cef59397bd72918?pvs=21)


*/

function generateWord() {

    const vogaisM = ["O"];
    const substantivos = ["gato", "cachorro", "pássaro", "elefante", "leão"];
    const adjetivos = ["preto", "pequeno", "rápido", "esperto", "grande"];
    const verbos = ["saltou", "correu", "voou", "pulou", "dormiu"];

    for (let index = 0; index < 5; index++) {

        const vogal = vogaisM[Math.floor(Math.random() * 1)];
        const substantivo = substantivos[Math.floor(Math.random() * 5)];
        const adjetivo = adjetivos[Math.floor(Math.random() * 5)];
        const verbo = verbos[Math.floor(Math.random() * 5)];

        const fraseAleatoria = `"${vogal} ${substantivo} ${adjetivo} ${verbo} sobre o ${substantivo}."`;

        return fraseAleatoria
    }

}


console.log(generateWord())

/*
    // Array de animais
const animais = ["cachorro", "gato", "elefante", "leão", "tigre", "pássaro", "peixe", "cobra", "macaco", "girafa"];
// Array de cores
const cores = ["vermelho", "azul", "verde", "amarelo", "laranja", "roxo", "rosa", "preto", "branco", "marrom"];
// Array de palavras usadas para lidar
const palavrasParaLidar = ["paciência", "resiliência", "compreensão", "tolerância", "persistência", "calma", "aceitação", "equilíbrio", "assertividade", "autocontrole"];
const verbo = ["saltou", "correu", "voou"];
const adjetivo = ["preto", "rápido", "pequeno"];



// Listas de palavras por categoria
const substantivos = ["gato", "cachorro", "pássaro", "elefante", "leão"];
const adjetivos = ["preto", "pequeno", "rápido", "esperto", "grande"];
const verbos = ["saltou", "correu", "voou", "pulou", "dormiu"];

// Função para selecionar uma palavra aleatória de uma lista
function palavraAleatoria(listaDePalavras) {
    const indiceAleatorio = Math.floor(Math.random() * listaDePalavras.length);
    return listaDePalavras[indiceAleatorio];
}

// Construção da frase aleatória
const fraseAleatoria = `"${palavraAleatoria(substantivos)} ${palavraAleatoria(adjetivos)} ${palavraAleatoria(verbos)} sobre o ${palavraAleatoria(substantivos)}."`;

// Saída da frase aleatória
console.log(fraseAleatoria);

*/