/*
Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada número é par. 
Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares.

*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando as listas da questão
let numeros = [12, 5, 8, 21, 16, 7];
let pares = [];

//iterando numeros para ver se cada elemento é par, adicionando-os em outro array
for(let numero of numeros) {
    if(numero % 2 == 0) {
        pares.push(numero);
    }
}

//imprimindo a lista pares
for(let numero of pares){
    console.log(numero);
}