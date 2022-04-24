// Faça um programa que solicite ao usuário o preço atual da gasolina 
// e informe a mensagem "A gasolina está cara" 
// se o valor informado for maior do que 2.5

console.log("Programa para pedir ao usuario que informe um valor para verificar o preço da gasolina...\n");

const readline = require ("readline-sync");

var gasolina = readline.question("Informe o valor da gasolina:\n");

if (gasolina > 2.5){
    console.log("A gasolina está cara")
}
