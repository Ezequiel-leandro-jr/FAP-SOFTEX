/*
Ordene o seguinte array de números em ordem crescente
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//criando e inicializando o array da questão
const numeros =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

//ordenando em ordem crescente
console.log(numeros.sort());