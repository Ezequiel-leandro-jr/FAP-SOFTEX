/* Exiba uma mensagem dependendo do tipo de animal: cachorro, gato, pássaro ou outro */

const readline = require("readline-sync");

let op = readline.questionInt('Escolha um PET:\n1. Cachorro\n2. Gato\n3. Pássaro\n4. Outro\nR=  ');
switch(op){
    case 1:
        console.log('Você escolheu o MELHOR AMIGO DO HOMEM.');
        break;
    case 2:
        console.log('Você escolheu o que vai ARRANHAR O SEU SOFÁ.');
        break;
    case 3:
        console.log('Você escolheu o que NÃO DEVERIA SER ENGAIOLADO.');
        break;
    case 4:
        console.log('Você escolheu a opção OUTRO.');
        break;
    default:
        console.log('NÚMERO INVÁLIDO!');
        break;
}