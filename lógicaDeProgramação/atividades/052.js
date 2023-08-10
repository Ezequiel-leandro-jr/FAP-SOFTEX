/*
exemplo de função com return
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função saudacao com return
function criarMensagemDeSaudacao(nome){
    mensagem = `Hello, ${nome}!`;
    return mensagem;
}

//chamada da função
let n = readline.question('Digite seu nome: ');

console.log(criarMensagemDeSaudacao(n));



