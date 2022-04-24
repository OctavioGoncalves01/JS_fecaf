// Faça um programa que solicite ao usuário para informar o valor da humidade atual do ambiente,
// correspondente a porcentagem de humidade no ar. 
// E este programa deverá mostrar apenas uma das seguintes frases:
    // O ar está húmido quando a humidade for maior que 70
    // O ar está seco quando a humidade for maior igual a 30 e menor igual a 70
    // O ar está muito seco quando a humidade for menor que 30

const prompt = require('prompt-sync')();

console.log("Programa para saber a humidade do ar:");
let humidade = prompt("Digite a humidade atual do ambiente (em %, sem o simbolo): ");

console.log(humidade)

if (humidade > 70){
    console.log(`O ar está úmido, com a porcentagem em ${humidade}%.`);
}else if ((humidade <= 70) && (humidade >= 30)) {
    console.log(`O ar está seco, com a porcentagem em ${humidade}%.`);
}else{
    console.log(`O ar está muito seco, com a porcentagem em ${humidade}%.`);
};