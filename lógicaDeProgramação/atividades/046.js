/*
criar uma função onde um parâmetro formal possui um valor padrão
*/

//habilitação da biblioteca readline-sync
const readline = require('readline-sync');

//criação da função exibirSaudacao com um parâmetro de valor padrão
function exibirSaudacao(nome, saudacao = 'Hello'){
    console.log(`${saudacao}, ${nome}!`);
}

//chamada da função apenas com o primeiro parâmetro
let n = readline.question('Digite o seu nome: ');

exibirSaudacao(n);

/*
//chamada da função com os dois parâmetros
let n = readline.question('Digite o seu nome: ');
let s = readline.question('Digite uma saudação: ');

exibirSaudacao(n, s);

*/
