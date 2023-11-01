/*

# Codando na gringa - desafios

### ****Sequência Espelho****

### **Descrição do Problema**

Crie um programa que gere uma sequência espelho. Dada uma sequência de números, 
o programa deve criar uma nova sequência que seja a sequência original seguida 
da mesma sequência em ordem inversa.

### **Exemplo de Entrada:**

```
[1, 2, 3]
```

### **Exemplo de Saída:**

```
[1, 2, 3, 3, 2, 1]
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Crie dois arrays um normal, um invertido e junte esses dois arrays

### Material de Apoio

- [Inverter array usando um método em javascript]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)


*/

// operador de propagação (spread operator)
const arr = [1, 2, 3]
// const arrInver = [ 3, 2, 1 ]

arr.push(...arrInver)

console.log(arr)
/*
const arr = [1, 2, 3];
const reversedArr = arr.slice().reverse(); // Inverte o array sem modificar o original
arr.push(...reversedArr); // Adiciona os elementos do array invertido ao final do original

console.log(arr); // Saída: [1, 2, 3, 3, 2, 1]
*/

/* outras formas

var vegetables = ['alface', 'tomate'];
var moreVegs = ['cenoura', 'brócolis', 'abobrinha'];

for (var i = 0; i < moreVegs.length; i++) {
    vegetables.push(moreVegs[i]);
}


var vegetables = ['alface', 'tomate'];
var moreVegs = ['cenoura', 'brócolis', 'abobrinha'];

moreVegs.forEach(function(veg) {
    vegetables.push(veg);
});
*/