/*
Remova o primeiro elemento do array de frutas do exercício anterior
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//declarando o array da questão
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

//removendo o primeiro elemento do array (mantendo o espaço de memória)
//delete frutas[0];

//removendo o primeiro elemento do array, excluindo o espaço de memória
frutas.splice(0,1);

//imprimindo o resultado
console.log(frutas);


