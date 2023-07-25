/* Verifique o dia da semana com base em um npumero de 1 a 7 */

const readline = require("readline-sync");

let dia = readline.questionInt('Digite um número inteiro, entre 1 e 7, representando os 7 dias da semana: ');
switch(dia){
    case 1:
        console.log('Você escolheu a SEGUNDA-FEIRA');
        break;
    case 2:
        console.log('Você escolheu a TERÇA-FEIRA');
        break;
    case 3:
        console.log('Você escolheu a QUARTA-FEIRA');
        break;
    case 4:
        console.log('Você escolheu a QUINTA-FEIRA');
        break;
    case 5:
        console.log('Você escolheu a SEXTA-FEIRA');
        break;
    default:
        console.log('NÚMERO INVÁLIDO!');
        break;
}