// Modificar os códigos da tabuada.js (feita em exercícios anteriores) 
// para executarem a função cabecalho logo no inicio do programa.
// Nesta atividade submeta apenas o arquivo tabuada.js 
// com a chamada para a função cabecalho()

//Minha tabuada:

const [cabecalho] = require("./exe26.js");
cabecalho("\n####-[ Programa de Tabuada: ]-####\n");
const prompt = require("prompt-sync")();

var i = parseInt(prompt("Digite um número: "));
var contador = 1;

while (contador <= 10){
    console.log(`${contador} X ${i} = ${contador*i}`);
    contador ++;
};