// Crie um programa contendo uma lista chamada 
// filmesDisponiveis com os nomes de 10 filmes ou séries.
// No mesmo código crie uma outra lista chamada 
// filmesAssistidos contendo os mesmos 10 filmes da lista filmesDisponiveis
// Remova da lista filmesAssistidos o último elemento desta lista.

//     Mostre ambas listas na tela.

const [cabecalho] = require("./exe26.js");
cabecalho("\nProgama para ver os filmes já vistos\n");

var filmesDisponiveis = ['Naruto', 'Koe no katachi', 'Kill la kill', 
'5 centimetos por segundo', 'Homem-aranha', 'O código da Vince', 
'Jurassic Park', 'Barbie e o castelo de diamante', 'RE:Zero', 'Hyouka'];

var filmesAssistidos = ['Naruto', 'Koe no katachi', 'Kill la kill', 
'5 centimetos por segundo', 'Homem-aranha', 'O código da Vince', 
'Jurassic Park', 'Barbie e o castelo de diamante', 'RE:Zero', 'Hyouka'];

for (i=0 ;i < filmesDisponiveis.length; i++){
    filmesAssistidos.splice(filmesDisponiveis.length-i, 1)
    console.log(`${i+1}º iteração\nSéries Disponiveis: ${filmesDisponiveis}`);
    console.log(`\nSéries assistidos: ${filmesAssistidos}\n`);  
};
