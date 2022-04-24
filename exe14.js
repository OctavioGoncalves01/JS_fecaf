// Faça um pequeno programa para simular um conselheiro para o jogo de 21.
// O programa deve solicitar ao usuário para que digite a soma das cartas, 
// e baseado nesta soma o programa informará ao usuário qual a melhor decisão a ser tomada, 
// seguindo a tabela em anexo:

const teclado = require('prompt-sync')();
let somaCartas = teclado("Informe o valor da soma de suas cartas:");

if (somaCartas <= 10){
    console.log("Sem dúvida, compre mais uma carta");
} else{
    if ((somaCartas > 10) && (somaCartas <= 15)){
        console.log("Há um risco, mas aconselho a comprar mais uma cartaa");
    }else{
        if ((somaCartas > 15) && (somaCartas <= 20)){
            console.log("Aconselho a parar de jogar");
        }else{
            if (somaCartas == 21){
                console.log("Você ganhou não compre mais nada");
            }else{
                console.log("Você perdeu!!");
            };
        };
    };
};