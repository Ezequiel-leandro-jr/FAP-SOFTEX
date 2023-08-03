/*
Faça um usuário digitar sua senha até que a senha seja a correta
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando as variáveis
let senha = NaN;

//processamento dos dados
conf = readline.question('Digite a sua senha: ');
while( senha !== conf){
    senha = readline.question('Confirme sua senha: ');
    if(senha !== conf){
        console.log('ERRO: senha incorreta!');
    }
}

console.log("Senha confirmada!");
