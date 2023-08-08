/*
Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função dobro
function dobro(num){
    let result = num * 2;
    console.log(`O dobro de ${num} = ${result}`);
}

//comandos para entrada de dados do usuário e impressão da função
let n = readline.questionFloat('Digite um valor numérico: ');

dobro(n);

