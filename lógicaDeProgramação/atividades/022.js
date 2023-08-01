/*
Dado o array de número abaixo, crie um novo array contendo apenas os números pares
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//declarando e inicializando o array da questão
const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//criando um novo array contendo apenas números pares
const novoArray = numeros.filter(x => x % 2 == 0);

console.log(novoArray);