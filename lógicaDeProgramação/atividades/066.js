/*
Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando o array da questão
let numeros = [3, 7, 2, 9, 5];

//exibindo cada elemento do array através do for of
for(let numero of numeros) {
    console.log(numero);
}
