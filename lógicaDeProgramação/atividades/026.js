/*
imprima os números de 1 a 10
*/

//hailitando a biblioteca readline-sync
const readline = require('readline-sync');

//declaração da variável contagem
let num = 1;

//entrada de dados da variável controle
let i = readline.questionFloat('Até que número você quer que a contagem pare: ');

//repetição while para impressão dos valores
while(num < i + 1){
    console.log(num);
    num++;
}