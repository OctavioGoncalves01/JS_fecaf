// Una as afirmações criadas no exercício anterior usando os operadores 
// && (AND), || (OR) e ^ (OU Exclusivo), 
// para gerar 8 resultados diferentes.


let vazio = '';
let temperatura = 32.9;
let maior = 100;
let humor = 'Feliz';

var resultadoVazio = (vazio.length == 0);  //true
var resultadoTemperatura = (temperatura <= 25.5); //false
var resultadoMaior = (maior > 99); //true
var resultadoHumor = (humor != "Feliz"); //false

let uniaoVazioHumor01 = (resultadoHumor || resultadoVazio); //true
let uniaoTemperaturaHumor02 = (resultadoTemperatura && resultadoHumor); //false
let uniaoVazioMaior03 = (resultadoVazio ^ resultadoMaior); // false/0
let uniaoTemperaturaMaior04 = (resultadoTemperatura && resultadoMaior); //true
let uniaoHumorVazio05 = (resultadoHumor || resultadoVazio); //true
let uniaoMaiorHumor06 = (resultadoMaior ^ resultadoHumor); // true/1
let uniaoVazioTemperatura07 = (resultadoVazio || resultadoTemperatura); //true
let uniaoTotal08 = (uniaoTemperaturaHumor && 
                    (uniaoHumorVazio && 
                        (uniaoTemperaturaMaior || uniaoVazioTemperatura))); //false

