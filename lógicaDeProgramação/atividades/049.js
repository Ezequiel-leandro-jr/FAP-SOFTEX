/*
calculadora usando função sem retorno com valores padrão
*/

//habilitação da biblioteca readline-sync
const readline = require('readline-sync');

//criação da função contagemRegressiva
function contagemRegressiva(n, init = 10){
    console.log('Contagem Regressiva:');
    for(let i = init; i >= 0; i--){
        console.log(i);
    }
}

//chamada da função
// let nome = readline.question('Digite o seu nome: ');
// let inicio = readline.questionInt('Digite um valor inteiro para a contagem regressiva: ');

// contagemRegressiva(nome, inicio);

contagemRegressiva('Ezequiel');



