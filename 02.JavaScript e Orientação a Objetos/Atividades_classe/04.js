/*
02.Faça um programa com Javascript para verificar se um determinado ano, fornecido
pelo usuário, é bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por
4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é
bissexto.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//objeto ano
const ano = {
    data: 0
}

//função bissexto
function bissexto(n) {
    if((n % 400 == 0) || (n % 4 == 0) && (n % 100 != 0)) {
        if(n > 2023){
            console.log(`\n${n} será um ano bissexto.`);
        } else if(n < 2023){
            console.log(`\n${n} foi um ano bissexto.`);
        } else {
            console.log(`\n${n} é um ano bissexto.`);
        }
    } else {
        if(n > 2023){
            console.log(`\n${n} não será um ano bissexto.`);
        } else if(n < 2023){
            console.log(`\n${n} não foi um ano bissexto.`);
        } else {
            console.log(`\n${n} não é um ano bissexto.`);
        }
    }
}

//módulo principal
console.log('\n== ANO BISSEXTO ==\n');

ano.data = readline.questionInt('Digite o ano: ');

bissexto(ano.data);
