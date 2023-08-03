/*
Calcule a soma dos números de 1 a 100
*/

//hailitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando e inicializando as variáveis
let ate = readline.questionFloat('Até que número você quer que some: ');
let i = 1;
let num = 1;

//while para processamento dos dados
while( i < ate + 1){
    console.log(num = num + i);
    i++;
}
