// Ordenação
// Faça um programa que solicite que o usuário digite 3 números 
// e guarde-os nas variáveis a, b e c 
// Depois mostre os números em ordem crescente
// Utilize if encadeado para resolver este caso
// Entregar o fluxograma e o código .js


const prompt = require("prompt-sync")();
console.log("Programa para ordenar 3 números:");

let a = prompt("Digite o primeiro número: ");
let b = prompt("Digite o segundo número: ");
let c = prompt("Digite o terceiro número: ");


if (a <= b && a <= c && b <= c){
    console.log(a,c,b);
}else{
    if (a <= b && a <= c && c <= b){
        console.log(a,c,b);
        }else{
            if (b <= a && b <= c && a <= c){
                console.log(b,a,c);
            }else{
                if (b <= a && b <= c && c <= a){
                    console.log(b,c,a);
                }else{
                    if (c <= a && c <= b && a <= b){
                        console.log(c,a,b);
                    }else{
                        if (c <= a && c <= b && b <= a){
                            console.log(c,b,a);
                        }
                    }
                }
            }
        }
}


