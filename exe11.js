// Faça um programa que solicite a temperatura atual para o usuário em graus Celsius. 
// E este programa deverá mostrar apenas uma das seguintes frases:
    // Está calor quando a temperatura for maior que 25
    // Está frio quando a temperatura não for maior que 25

const prompt = require('prompt-sync')();

console.log("Programa para saber se está quente ou frio");
let temperatura = prompt("Digite a temperatura atual (em °C):");

if (temperatura > 25){
    console.log("Está calor!");
}else{
    console.log("Está frio!");
};

