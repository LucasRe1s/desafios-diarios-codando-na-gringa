/*
# Codando na gringa - desafios

Bom diaaaaa!! Hoje o desafio é fácil hein, pra dar aquele gás no meio da semana 💪💪

Desafio de hoje:

1. Veja no material de apoio o que é a condição if-else
2. Faça qualquer programa que declara uma variável e utilize a condição if-else (do jeito que você quiser)

Exemplo:

https://gist.github.com/joaoalber/f7cd7bad8cb771ec6a01216e3f41f095

Bônus: ao invés de declarar a variável, receba do usuário

Modo complexo (para não iniciantes)
Pode descansar hoje que o de ontem foi difícil (ou tente fazer o de ontem rsrs)

Material de Apoio

- O que é if-else?
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

- O que é uma variável e como declarar?
 https://ebaconline.com.br/blog/variaveis-na-programacao-seo#:~:text=Para%20atribuir%20um%20valor%20%C3%A0,durante%20a%20execu%C3%A7%C3%A3o%20do%20programa.

 - Como ler a entrada de um usuário (em javascript)?
 https://www.javascriptprogressivo.net/2018/07/Como-Receber-Dados-Usuario-Metodo-prompt.html

*/


function transicaoDeCarreira(vaga) {
    if(vaga == "desenvolvedor") {
        console.log("Parabéns, voce conseguiu concluir sua transição de carreira. Continue se dedicando! :D ");
    } else {
        console.log("Não foi dessa vez mas, não desista!")
    }
}

transicaoDeCarreira("promotor de vendas");