/* Converta um número de mês em seu nome correspondente */

const readline = require("readline-sync");

let dia = readline.questionInt('Digite um número inteiro, entre 1 e 12, representando os meses do ano: ');
switch(dia){
    case 1:
        console.log('1 = JANEIRO');
        break;
    case 2:
        cconsole.log('2 = FEVEREIRO');
        break;
    case 3:
        console.log('3 = MARÇO');
        break;
    case 4:
        console.log('4 = ABRIL');
        break;
    case 5:
        console.log('5 = MAIO');
        break;
    case 6:
        console.log('6 = JUNHO');
        break;
    case 7:
        console.log('7 = JULHO');
        break;
    case 8:
        console.log('8 = AGOSTO');
        break;
    case 9:
        console.log('9 = SETEMBRO');
        break;
    case 10:
        console.log('10 = OUTUBRO');
        break;
    case 11:
        console.log('11 = NOVEMBRO');
         break;
    case 12:
        console.log('12 = DEZEMBRO');
        break;   
    default:
        console.log('NÚMERO INVÁLIDO!');
        break;
}