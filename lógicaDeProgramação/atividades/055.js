/*
Crie uma função chamada maiorNumero que retorna o maior número entre 3 parâmetros
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//função soma
function maiorNumero(n1 = 0,n2 = 0, n3 = 0){
    let maior = 0;
    if(n1 > n2 && n1 > n3){
        maior = n1;
    }else if(n2 > n1 && n2 > n3){
        maior = n2;
    }else{
        maior = n3;
    }
    return maior;
}

//chamada da função
let num1 = readline.questionFloat('Digite o primeiro valor: ');
let num2 = readline.questionFloat('Digite o segundo valor: ');
let num3 = readline.questionFloat('Digite o terceiro valor: ');

console.log('O maior valor é =', maiorNumero(num1, num2, num3));
