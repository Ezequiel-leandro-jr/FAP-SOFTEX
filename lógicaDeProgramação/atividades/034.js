/*
Calcule o fatorial de um número
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando as variáveis globais
let numero = readline.questionInt('Digite um número inteiro: ');

//função fatorial
function fat(n){
    let resultado = 1;
    let contador = 1;

    while(contador <= n){
        resultado *= contador;
        contador++;
    }
    return resultado;
}

//processamento dos dados
console.log(`O fatorial de ${numero} =`, fat(numero));