/*
Imprima os múltiplos de 3 de 1 a 30
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declaração das variáveis
let i = 1;

//processamento dos dados
let cont = readline.questionFloat('Até quanto você quer que imprima os múltiplos de 3: ');

while(i <= cont){
    if(i % 3 == 0){
        console.log(i);
    }
    i++;
}