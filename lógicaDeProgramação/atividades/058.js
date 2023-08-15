/*
Crie uma função recursiva chamada somaRecursiva
que receba um número inteiro positivo n como argumento e calcule a soma de todos os números
inteiros de 1 até n
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função somaRecursiva
function somaRecursiva(n) {
    if(n === 1) {
        return 1;
    } else if(n === 0) {
        return 0;
    } else {
        return n + somaRecursiva(n - 1);
    }
}

//testando a função
let numero = readline.questionInt('Digite um número inteiro positivo: ');

console.log(`A soma recursiva de ${numero} é igual a ${somaRecursiva(numero)}`);

