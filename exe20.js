// var i = 1;
// while ( i < 5 ) {
//    console.log("executando laço: " + i);
//    i++;
// }
// Baseado no código acima, 
// construa um app que mostre a tabuada do numero 7 na console.
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // ...
    // 7 x 10 = 70
// * Desafio, modifique o programa para usar um laço (for) ao invés do (while)

const prompt = require("prompt-sync")();

var i = parseInt(prompt("Digite um número: "));
var contador = 1;

while (contador <= 10){
    console.log(`${contador} X ${i} = ${contador*i}`);
    contador ++;
};


// DESAFIO
// for (contador = 1; contador <= 10; contador++){
//     console.log(`${contador} X ${i} = ${contador*i}`);
// }