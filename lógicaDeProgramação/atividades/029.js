/*
Multiplique um número por 2 até que o resultado seja maior que 1000
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando e inicializando as variáveis
let num = 1001;

while(num > 1000 || num <= 0){
    num = readline.questionFloat('Digite o valor da variável a ser multiplicada: ');
    if(num > 1000){
        console.log('ERRO: O valor digitado é maior que mil. Tente novamente.');
    } else if(num < 0){
        console.log('ERRO: O valor digitado é menor ou igual a zero. Tente novamente');
    }
}

//processamento dos dados
while(num <= 1000){
    if(num > 1000){

    }
    console.log(num = num * 2);
}



