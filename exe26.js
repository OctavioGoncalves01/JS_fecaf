// Crie uma função chamada cabeçalho, que imprima 
// o nome da faculdade, o curso, o seu RA e o seu nome, 
// em quadro feito com símbolos do tipo (#, *, &, @, etc...)


function cabecalho(x){
    let listaCabecalho = ["#####################", 
    "# Faculdade FECAF   #",
    "# Curso ADS         #",
    "# RA: 31950         #",
    "# Octavio Goncalves #",
    "#####################",
    x];
    for(i in listaCabecalho){
        console.log(listaCabecalho[i]);
    };
};

//Neste caso deve escolher um simbulo para ser mostrado:

function cabecalho2(S){

    console.log(S,S,S,S,S,S,S,S,S,S,S,S);
    console.log(S," Faculdade FECAF   ",S);
    console.log(S," Curso ADS         ",S);
    console.log(S," RA: 31950         ",S);
    console.log(S," Octavio Goncalves ",S);
    console.log(S,S,S,S,S,S,S,S,S,S,S,S);
};
cabecalho2("$");

//!!importação para o exercicio 27!!
module.exports = [cabecalho];