/*
Crie dois arrays com números de 1 a 5 cada e, em seguida, concatene-os em um novo array.
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//criando e inicializando os dois arrays
let arrayUm = [1, 2, 3, 4, 5];
let arrayDois = [1, 2, 3, 4, 5];

//concatenando os arrays em outro array
let arrayTres = arrayUm.concat(arrayDois);

//imprimindo os resultados
console.log(arrayTres);
