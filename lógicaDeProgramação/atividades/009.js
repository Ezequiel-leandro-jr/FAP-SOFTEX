/* Exiba uma mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado", "outro". */

const readline = require("readline-sync");

let op = readline.questionInt('Qual seu estado civil?\n1. Solteiro\n2. Casado\n3. Divorciado\n4. outro\nR= ');
switch(op){
    case 1:
        console.log('Você é SOLTEIRO(A)');
        break;
    case 2:
        console.log('Você é CASADO(A)');
        break;
    case 3:
        console.log('Você é DIVORCIADO(A)');
        break;
    case 4:
        console.log('Você escolheu a opção OUTRO');
        break;
    default:
        console.log('NÚMERO INVÁLIDO!');
        break;
}