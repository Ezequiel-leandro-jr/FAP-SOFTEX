/*
Imagine que você tem uma matriz bidimensional representando uma grade de pontos: 
const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; 
Utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a matriz da questão e a variável soma
const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];
let soma = 0;

//iterando com for in aninhado, para fazer o somatório
for(let ponto of pontos) {
    for(let i in pontos) {
        soma += ponto[i];
    }
}

/*//versão com dois for of
for(let ponto of pontos){
    for(let p of ponto){
        soma += p;
    }
}*/

/*//versão com dois for in
for(let i in pontos){
    for(let j in pontos[i]){
        soma += pontos[i][j];
    }
}*/

//imprimindo soma
console.log(`O somatório dos elementos da matriz = ${soma}`);

