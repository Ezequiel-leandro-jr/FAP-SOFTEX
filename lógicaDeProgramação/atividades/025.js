/*
Crie uma função que receba um parâmetro e verifique se é um array ou não. 
A função deve retornar true se for um array e false caso contrário.
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//criando uma função que recebe um parâmetro, que diz se o parâmetro é um array
function funcao(a){
    console.log(Array.isArray(a));
}

//declarando duas variáveis: uma array e outra numérica, para testar a função
let vetor = ['eu', 'tu', 'ele', 'nós', 'vós', 'eles'];
let num = 5;

//testando a função
funcao(vetor);

funcao(num);
