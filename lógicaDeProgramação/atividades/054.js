/*
Crie uma função chamada ehPar que aceite dois números como parâmetros e retorne a soma deles
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//função ehPar
function ehPar(n){
    let resultado;
    if(n % 2 == 0){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}

//chamada da função
let num = readline.questionFloat('Digite o número: ');


console.log(`${num} é par?`, ehPar(num));