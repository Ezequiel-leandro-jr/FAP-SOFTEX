/*
Conte e imprima a quantidade de números pares de 1 a 50
*/

//hailitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando e inicializando as variáveis
let cont = readline.questionFloat('Até quanto você quer a contagem chegue? R= ');
let i = 1;

//processamento dos dados
while(i < cont + 1){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

