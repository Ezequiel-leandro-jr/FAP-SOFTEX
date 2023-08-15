/* recursividade
Função que chama a si mesma */

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função
function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1; //caso base: fatorial de 0 e 1 = 1
    } else {
        return n * fatorial(n - 1); //chamada recursiva
    }
}

//teste da função
let numero = readline.questionInt('Digite um número inteiro: ');
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

