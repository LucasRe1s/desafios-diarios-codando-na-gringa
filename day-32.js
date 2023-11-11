/*
# Codando na gringa - desafios

# 31° dia (10/11) - Organizador de E-mails

### **Dificuldade**: ⭐⭐⭐☆☆

### **Descrição do Problema**

Escreva um programa que organiza e-mails por domínio retornando um Hash com os emails separados por dominio

### **Exemplo de Entrada:**

```
["user1@gmail.com", "user2@yahoo.com", "user3@gmail.com"]
```

### **Exemplo de Saída:**

```
{
  "gmail.com" => [user1@gmail.com, user3@gmail.com],
  "yahoo.com" => [user2@yahoo.com]
}
```

### Dicas **[✨](https://emojipedia.org/pt/brilhos)**

- Passe por cada item do Array de Strings e crie um Hash/Dicionário a partir de cada @ existente, 
utilize condicionais pra ver se a chave já existe, caso a chave exista, adicione o novo email
- Você pode utilizar o método .split para separar o @ e sabegr qual o domínio a ser salvo no Hash

### Material de Apoio

- [Como utilizar o método split em javascript]
(https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254)

### Gabarito

Estará disponível após a live do dia 12/11

*/

const arr = ["user1@gmail.com", "user2@yahoo.com", "user3@gmail.com"]
/*
stringExemplo = "usuario@gmail.com";
*/

function emailOrganizer (arr) {
    const hash = {
        "gmail.com": [],
        "yahoo.com": []
    }

    for (let i = 0; i < arr.length; i++) {
        const emailTab = arr[i];
        const resultado = emailTab.split("@");

        /*O método split('@') divide o e-mail em 
        duas partes, uma parte antes do '@' e outra 
        parte após o '@'. Portanto, ao verificar o 
        domínio, você deve usar resultado[1] em vez 
        de resultado.*/

        if (/^gmail\.com$/.test(resultado[1])) {
            hash["gmail.com"].push(arr[i]);
        } else if (/^yahoo\.com$/.test(resultado[1])) {
            hash["yahoo.com"].push(arr[i]);
        }        
    }
    return hash
}

console.log(emailOrganizer(arr));