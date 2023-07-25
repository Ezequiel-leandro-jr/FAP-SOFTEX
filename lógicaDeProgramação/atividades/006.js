/* Programa para o usuário poder dirigir */

const readline = require("readline-sync");

let nome = readline.question('Qual o seu nome?: ');
console.log('Olá,', nome, '! ');
let idade = readline.questionInt('Qual a sua idade?: ');

if(idade < 16){
    console.log('Você não pode dirigir,', nome,'...');
} else if(idade >= 16 && idade <= 17){
    console.log('Você pode dirigir, sob autorização dos pais ou responsáveis.');
} else {
    let habilitacao = readline.question('Você já possui habilitação? : ');

    if(habilitacao == 'sim' || habilitacao == 'SIM' || habilitacao == 's' || habilitacao == 'S' || habilitacao == 'si' || habilitacao == 'Si' || habilitacao == 'SI' || habilitacao == 'sI'){
        console.log('Você pode dirigir!');
    } else{
        console.log('Infelizmente você não pode dirigir sem habilitação, ', nome, '...');
    }
}
