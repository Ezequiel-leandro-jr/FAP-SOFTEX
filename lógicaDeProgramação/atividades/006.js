/* Programa para o usuário poder dirigir */

const readline = require("readline-sync");

let nome = readline.question('Qual o seu nome?: ');
console.log('Olá,', nome, '! ');
let idade = readline.questionInt('Qual a sua idade?: ');

if (idade < 18) {
    console.log('Você é menor de idade,', nome, '. Não pode dirigir ainda...');
} else {
    let habilitacao = readline.question('Você já possui habilitação? : ');

    if(habilitacao == 'sim' || habilitacao == 'SIM' || habilitacao == 's' || habilitacao == 'S'){
        console.log('Você pode dirigir!');
    } else{
        console.log('Infelizmente você não pode dirigir sem habilitação, ', nome, '...');
    }
}
