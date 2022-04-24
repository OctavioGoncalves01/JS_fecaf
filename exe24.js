// Faça um pequeno programa que liste todos os números 
// de 5 a 75 juntamente com a soma. Conforme exemplo:
//     5    -    5
//     6    -    11
//     7    -    18
//     8    -    26
//     9    -    35
//     ...
//     75    - 

let soma = 0;
let numeros = 5;

for (i = numeros; numeros <=75; numeros++){
    soma += numeros;
    console.log(numeros, " - " , soma);
}