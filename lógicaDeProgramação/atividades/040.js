/*
Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. 
Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função mostrarNumeros
function mostrarNumeros(inicio, fim){
    for(let i = inicio; i <= fim; i++){
        if(Number.isInteger(i)){
            console.log(i);
        }
    }
}

//chamando a função mostrarNumeros
let numinicio = readline.questionFloat('Digite um valor inicial: ');
let numfinal = readline.questionFloat('Digite um valor final: ');

mostrarNumeros(numinicio, numfinal);




