/* DESENVOLVIMENTO DO JOGO BLACKJACK AKA 21 */

const readline = require('readline-sync');

let carta1 = readline.questionInt('Digite o valor da primeira carta: ');
let bancoCarta1 = readline.questionInt('Digite o valor da primeira carta do banco: ');
let carta2 = readline.questionInt('Digite o valor da segunda carta: ');
let bancoCarta2 = readline.questionInt('Digite o valor da segunda carta do banco: ');
let bancoCarta3 = readline.questionInt('Digite o valor da terceira carta do banco: ');
let bancoCarta4 = readline.questionInt('Digite o valor da quarta carta do banco: ');

let somaCartas = carta1 + carta2;
let bancoSomaCartas = bancoCarta1 + bancoCarta2 + bancoCarta3 + bancoCarta4;

if(somaCartas > 21){
    console.log("O banco ganhou!");
} else if(bancoSomaCartas > 21 || (somaCartas <= 21 && somaCartas > bancoSomaCartas)){
    console.log("Você ganhou!")
} else{
    console.log('O banco ganhou!');
}

console.log('Seus pontos:', somaCartas,"\nPontos do Banco:", bancoSomaCartas);