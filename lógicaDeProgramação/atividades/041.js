/*
Escreva uma função chamada verificarPar que aceite um número cmo entrada e exiba no console se o número é oar ou não.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função verificarPar
function verificarPar(n){
    let mensagem;
        if(n % 2 === 0){
            mensagem = `O número ${n} é PAR.`;
        }else{
            mensagem = `O número ${n} é ÍMPAR.`;
        }
        console.log(mensagem);
    }

//entrada do usuário e chamada da função
let num = readline.questionFloat('Digite um número, para saber se ele é par ou ímpar: ');

verificarPar(num);


