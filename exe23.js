// Faça um programa que solicite ao usuário para digitar um número 
// e exiba todos os números desde o informado pelo usuário 
// até o número 1 de maneira decrescente

var prompt = require("prompt-sync")();
var teclado = parseInt(prompt("Digite um número: "));

for (teclado; teclado >= 1; teclado--){
    console.log(teclado);
}