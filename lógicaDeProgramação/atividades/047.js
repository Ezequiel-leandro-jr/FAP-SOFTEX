/*
Criação de uma função que dê um valor padrão caso o parâmetro do nome não seja preenchido
pelo usuário
*/

//habilitação da biblioteca readline-sync
const readline = require('readline-sync');

//criação da função saudacao
function saudacao(z, n = 'humano'){
    console.log(`Òlá, ${n}!`);
}

//chamada da função
let idade = readline.questionInt('Digite a sua idade: ');
let nome = readline.question('Digite o seu nome: ');

saudacao(idade, nome);

/*ele vai imprimir um espaço em branco quando você der ENTER, aqui pelo readline do node*/
