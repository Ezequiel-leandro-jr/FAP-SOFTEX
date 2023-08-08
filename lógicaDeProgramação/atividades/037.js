/*criando função de saudação com parâmetro*/

//habilitando biblioteca readline-sync
const readline = require('readline-sync');

//criando a função exibirSaudacao
function exibirSaudacao(n){
    const mensagem = `Olá, ${n}! Seja bem-vinde!`;
    console.log(mensagem);
}

//imprimindo o resultado da função
let nome = readline.question('Digite o seu nome: ');

exibirSaudacao(nome);