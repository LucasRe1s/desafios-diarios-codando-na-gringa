/*
# Codando na gringa - desafios

****Verificador de Anagramas****

### **Dificuldade**: ⭐⭐☆☆☆

### **Descrição do Problema**

Crie um programa que verifique se duas palavras são anagramas, ou seja,
 se têm as mesmas letras em ordens diferentes.

### **Exemplo de Entrada:**

```
Palavra 1: "amor"
Palavra 2: "roma"
```

### **Exemplo de Saída:**

```
São anagramas!
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Deixe as frases em minusculo (para não ter variações de letras maiusculas e minusculas)
- Transforme as frases em arrays
- Verifique se um dos arrays invertidos é igual ao outro

### Material de Apoio

- [Reverter array em python](https://www.askpython.com/python/array/reverse-an-array-in-python)
- [Converter string em array em ruby](https://stackoverflow.com/a/37109086)

### Gabarito

Estará disponível após a live de domingo (5/11)

*/

function anagramas(frase1, frase2) {
   
    const fraseNova1 = frase1.split('').sort();
    const fraseNova2 = frase2.split('').sort();

    for (let i = 0; i < fraseNova1.length; i++) {
        if (fraseNova1[i] === fraseNova2[i]) {
            return 'São anagramas!'
        }
        return 'não são anagramas!'
    }

}

console.log(anagramas("ouvir", "virou"))

/*
function saoAnagramas(palavra1, palavra2) {
    palavra1 = palavra1.toLowerCase().split('').sort().join('');
    palavra2 = palavra2.toLowerCase().split('').sort().join('');

    return palavra1 === palavra2;
}

const palavra1 = "ouvir"
const palavra2 = "virou"

if (saoAnagramas(palavra1, palavra2)) {
    console.log("As palavras são anagramas!");
} else {
    console.log("As palavras não são anagramas.");
}


Neste código, a função saoAnagramas(palavra1, palavra2) recebe duas palavras 
como entrada, converte todas as 
letras para minúsculas usando toLowerCase(), em seguida, divide as palavras 
em um array de caracteres com split(''), ordena os caracteres usando sort(), 
e finalmente junta os caracteres de volta em uma string usando join(''). Após 
esse processamento, ela compara se as duas palavras transformadas são idênticas. 
Se forem, as palavras são anagramas.

O programa usa prompt() para receber a entrada do usuário. Ao executar o código, ele 
pedirá ao usuário para inserir duas palavras e informará se são anagramas ou não.


*/

/* lista de anagramas para teste

Claro, aqui estão algumas palavras e seus anagramas correspondentes:

1. "amor" - "roma"
2. "ouvir" - "vírou"
3. "perto" - "trope"
4. "escola" - "coleas"
5. "cinema" - "macine"
6. "listen" - "silent"
7. "batata" - "tabata"
8. "amigos" - "magios"
9. "correr" - "recrio"
10. "café" - "feca"

Lembre-se de que um anagrama é uma palavra ou frase formada pela reorganização
das letras de outra palavra ou frase, usando todas as letras originais exatamente 
uma vez. Existem muitos outros anagramas possíveis para diferentes palavras; esses 
são apenas alguns exemplos.
*/