// // Em seu caderno mesmo, crie 4 informações em variáveis separadas, 
// e com estas informações crie 4 afirmações cuja a resposta seja booleana (verdadeiro ou falso), 
// juntamente com 4 variáveis que receberão estas afirmações, 
// e adicione um comentário informando se a afirmação é verdadeira ou falsa

let vazio = '';
let temperatura = 32.9;
let maior = 100;
let humor = 'Feliz';


var resultadoVazio = (vazio.length == 0);  //true
var resultadoTemperatura = (temperatura <= 25.5); //false
var resultadoMaior = (maior > 99); //true
var resultadoHumor = (humor != "Feliz"); //false

console.log(`A variavel esta vazia?\n ${resultadoVazio}`)
console.log(`A temperatura é menor que 25.5?\n ${resultadoTemperatura}`)
console.log(`O valor ${maior} é maior que 99?\n ${resultadoMaior}`)
console.log(`Seu humor é diferente de FELIZ ?\n ${resultadoHumor}`)