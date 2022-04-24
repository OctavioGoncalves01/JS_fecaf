// Faça um programa que solicite ao usuário para informar 
// a temperatura atual do ambiente em graus Celsius. 
// E este programa deverá mostrar apenas uma das seguintes frases:

    // Está congelando, quando a temperatura for menor que -10
    // Está muito frio, quando a temperatura for maior igual a -10 e menor que 0
    // Está frio, quando a temperatura for maior igual a 0 e menor que 10
    // Está agradável, quando a temperatura for maior igual a 10 e menor que 20
    // Está calor, quando a temperatura for maior igual a 20 e menor que 25
    // Está muito calor, quando a temperatura for maior igual a 25 e menor que 35
    // Está insuportavelmente quente, quando a temperatura for maior igual a 35

const teclado = require('prompt-sync')();
let temperatura = teclado("Digite a temperatura atual (em °C):");

if (temperatura < -10){
    console.log("Esta congelando");
}else{
    if ((temperatura >= -10) && (temperatura < 0)){
        console.log("Esta muito frio");
    }else{
        if ((temperatura >= 0) && (temperatura <10)){
            console.log("Esta frio");
        }else{
            if ((temperatura >= 10) && (temperatura <20)){
                console.log("Esta agradavel");
            }else{
                if ((temperatura >= 20) && (temperatura <25)){
                    console.log("Esta calor");
                }else{
                    if ((temperatura >= 25) && (temperatura <35)){
                        console.log("Esta muito calor");
                    }else{
                        console.log("Esta insuportavelmente quente");
                    };
                };
            };
        };
    };
};