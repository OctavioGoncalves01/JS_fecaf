// Faça um programa que peça 5 números ao usuário e 
// mostre os números em ordem crescente na tela.
// *Obs.: Não utilize nenhuma função pronta, 
// crie seu próprio código para fazer a ordenação.


const [cabecalho] = require("./exe26.js");
cabecalho("\nPrograma BubbleSort\n");
var prompt = require("prompt-sync")();

var listaNum = [];

function bubbleSort(lista){
    for (let i = 0; i <lista.length; i++){
        for (let proximoNum = i+1; proximoNum < lista.length; proximoNum++){
            if (lista[i] > lista[proximoNum]){
                let trocaNum = lista[i];
                lista[i] = lista[proximoNum];
                lista[proximoNum] = trocaNum;
            };
        };
    };
    return lista;
};

for (let i=0; i<5; i++){
    let numero = parseInt(prompt(`Digite o número de ${i}º posição : `));
    listaNum.push(numero);
};


var listaNumOrdenada = bubbleSort(listaNum);

console.log(listaNumOrdenada);
