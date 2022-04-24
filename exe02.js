// Crie e inicie variáveis para guardar as informações abaixo usando const, let, var de acordo com a forma que achar correto.

// a) Nome da empresa, que será acessível por toda a aplicação.
// b) Variável usada apenas no módulo de pagamento para guardar o total de salários pagos no mês.
// c) Quantidade de dias de faturamento, normalmente esta informação será fixa e nunca mais alterada
// d) Todas as notas de um aluno de uma disciplina
// e) Todos os dados de um carro (placa, chassi, modelo, ano, cor, nome do dono) que foi multado.
// f) O número de ouro da matemática valor 1.61803...
// g) Os nomes dos alunos de uma turma com 10 alunos
// h) Quantidade de pares de tênis de um armário

var nomeDaEmpresa = "Fecaf";
let pagamentoMes = 27;
const diasFaturamento = 7;
let notasAluno01DiciplinaA = [7.5, 6.7, 8.9, 10.0];
var dadosDoCarro = {"Placa":"abc-123", "Chassi":"a1b2c3d4", "Modelo":"Golf", "Ano":"2015", 
                                        "Cor":"Roxo", "Nome do Dono":"Joaozinho"};
const numeroDourado = 1.61803;
var alunosDaSala01 = ["Ana", "Allan", "Bia", "Carlos", "Daniel", "Juliana", "Octavio", "Samuel", "Tais", "Zedenil"];
let qntTenisArmario = 5;

console.log("Nome da empresa: ");
console.log(nomeDaEmpresa);
console.log("Total de salarios pagos no mes:");
console.log(pagamentoMes);
console.log("Dias de faturamentos da emprese:");
console.log(diasFaturamento);
console.log("Notas de um aluno:");
console.log(notasAluno01DiciplinaA);
console.log("Dados de um carro que levou multa:");
console.log(dadosDoCarro);
console.log("Numero dourado:");
console.log(numeroDourado);
console.log("Alunos da sala 01:");
console.log(alunosDaSala01);
console.log("Qunatidade atual de tenis em um armario:");
console.log(qntTenisArmario);

