// Faça um programa que peça 5 números ao usuário e 
// mostre os números em ordem crescente na tela.
// *Obs.: Não utilize nenhuma função pronta, 
// crie seu próprio código para fazer a ordenação.


const [cabecalho] = require("./exe26.js");
cabecalho("\nPrograma BubbleSort\n");
var prompt = require("prompt-sync")();

function bubbleSort(){
    var listaNum = [];

    for (let i=0; i<5; i++){
    let numero = parseInt(prompt(`Digite o número de ${i}º posição : `));
    listaNum.push(numero);
        };

    for (let i = 0; i <listaNum.length; i++){
        for (let proximoNum = i+1; proximoNum < listaNum.length; proximoNum++){
            if (listaNum[i] > listaNum[proximoNum]){
                let trocaNum = listaNum[i];
                listaNum[i] = listaNum[proximoNum];
                listaNum[proximoNum] = trocaNum;
            };
        };
    };
    console.log(listaNum)
};

bubbleSort();
