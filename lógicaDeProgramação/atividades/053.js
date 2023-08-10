/*
Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//função soma
function soma(n1 = 0,n2 = 0){
    return n1 + n2;
}

//chamada da função
let num1 = readline.questionFloat('Digite o primeiro valor: ');
let num2 = readline.questionFloat('Digite o segundo valor: ');

console.log(soma(num1, num2));

