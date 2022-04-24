// Ordenação
// Faça um programa que solicite que o usuário 
// digite 2 números e guarde-os nas variáveis a e b 
// Depois mostre os números em ordem crescente
// Entregar o fluxograma e o código .js

const prompt = require("prompt-sync")();
console.log("Programa para verificar se qual é o maior númrero:");

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");

if (num1 < num2){
    console.log(`O ${num1} é menor que o ${num2}`);
    console.log(`Ordem crescente: ${num1}, ${num2}`);
} else{
    console.log(`O ${num2} é menor que o ${num1}`);
    console.log(`Ordem crescente: ${num2}, ${num1}`);
};
