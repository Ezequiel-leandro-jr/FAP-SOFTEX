/*
05. Faça um programa em Javascript que receba do usuário um número N e depois
imprima os N primeiros números naturais ímpares.
*/

//habilitando o readline-sync
const readline = require('readline-sync');

//funcao naturaisImpares
function naturaisImpares(n) {
    n = parseInt(n.toFixed(0));
    if(n <= 0) {
        console.log('\nERRO: número menor que zero.');
    } else {
        for(let i = 0; i <= n; i++) {
            if((i > 0) && (i % 2 != 0)) {
                console.log(i);
            }
        }
    }   
}

//módulo principal
let n = readline.questionFloat('Digite um número inteiro e maior que zero: ');

naturaisImpares(n);