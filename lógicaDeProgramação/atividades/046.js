/*
criar uma função onde um parâmetro formal possui um valor padrão
*/

//habilitação da biblioteca readline-sync
const readline = require('readline-sync');

//criação da função exibirSaudacao com um parâmetro de valor padrão
function exibirSaudacao(nome, saudacao = 'Hello,'){
    console.log(`${saudacao}, ${nome}`);
}