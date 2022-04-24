// Faça uma função para calcular o volume de uma caixa,
// esta função deverá receber 3 valores (base, altura, largura) 
// e deverá retornar o valor do volume  programa que calcule 
// o volume de uma caixa volume = base * largura * altura

const [cabecalho] = require("./exe26.js");
var prompt = require("prompt-sync")();
cabecalho("\n####-[ Programa para saber o volume de uma caixa: ]-####\n");

function calcularVolumeCaixa(){
    let base = parseInt(prompt("Informe a base da caixa: "));
    let largura = parseInt(prompt("Informe a largura da caixa: "));
    let altura = parseInt(prompt("Informe a altura da caixa: "));
    
    let volume = base * largura * altura;
    console.log("O volume da caixa informada é: ", volume);
};

calcularVolumeCaixa();