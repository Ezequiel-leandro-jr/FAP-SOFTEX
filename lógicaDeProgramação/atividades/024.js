/*
Dado o array de frutas abixo, encontre o índice em que a fruta "laranja" está localizada
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//declaração e inicialização do array da questão
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

//encontrando o índice do elemento 'laranja'
console.log(frutas.findIndex(element => element === 'laranja'));
