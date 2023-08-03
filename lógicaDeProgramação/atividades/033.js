/*
Calcule a média de uma lista de números
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declarando as variáveis
let n = readline.questionInt('Quantos números terão a sua lista: ');
let lista = new Array(n);
let i = 0;
let somaLista = 0;

//processando os dados
while(i <= n - 1){
    lista[i] = readline.questionInt('Digite um valor: ');
    somaLista = somaLista + lista[i];
    i++;
}

console.log('A média dos números da lista =', somaLista / n);
