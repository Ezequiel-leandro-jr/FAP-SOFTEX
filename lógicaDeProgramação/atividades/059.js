/*
Escreva uma função chamada fibonacci que receba um número n como parâmetro e retorne
o n-ésimo termo da sequência de Fibonacci. Lembre-se de que implementar essa função de forma
recursiva
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função
function fib(n) {
    if(n <= 1){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

//testando a função
let numero = readline.questionInt('Digite um número inteiro maior que 0: ');
console.log(`O ${numero}° elemento da sequência de Fibonacci = ${fib(numero)}`);



