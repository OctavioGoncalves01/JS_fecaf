// Faça um programa que peça 10 números ao usuário,
// guarde-os em uma lista, e depois mostre as seguintes informações: 
// * A soma de todos os números
// * A média aritmética
// * O maior número
// * O menor número

const [cabecalho] = require("./exe26.js");
var prompt = require("prompt-sync")();
cabecalho("\nPrograma para ver a soma, media, o maior e menor número inputado\n");

function informacoesListaNumeros(){
    var listaNumeros = [];
    var soma = 0;
    var maior = 0;
    var menor = 0;

    for (i=0; i<10; i++){
        let numero = parseInt(prompt(`Digite o número para a posição ${i}: `));
        listaNumeros.push(numero);
        
        soma += numero;

        if (i == 0){
            maior = menor = listaNumeros[i];
        }else{
            if (listaNumeros[i] > maior){
                maior = listaNumeros[i];
            };
            if (listaNumeros[i] < menor){
                menor = listaNumeros[i];
            };
        };
    };

    var media = soma / 10;
    console.log('listaNumeros:',listaNumeros, 
    'soma:',soma, 
    'media:',media, 
    'menor:',menor, 
    'maior:',maior);

};

informacoesListaNumeros();