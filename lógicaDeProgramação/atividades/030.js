/*
Verifique se um número é primo
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declaração das variáveis
let num;
let resultado = true;
let i = 2;

//processamento dos dados
num = readline.questionInt('Digite um valor inteiro e  maior que zero: ');
while(i < num){
    if(num % i == 0){
        console.log(`O número ${num} não é primo`);
        resultado = false
        break;
    } 
    i++;
}

if(resultado){
    console.log(`O número ${num} é primo`)
}

