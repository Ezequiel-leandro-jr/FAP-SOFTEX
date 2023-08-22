/*
Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. 
Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando o objeto numericos e a variavel soma
let numericos = {a: 10, b: 20, c: 30, d: 40};
let soma = 0;

//iterando numericos através do for in para calcular a soma de todos os valores
for(let elemento in numericos) {
    soma += numericos[elemento];
}

//imprimindo o resultado do somatório
console.log(`O somatório entre os elementos do objeto = ${soma}`);