/*
04.Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
Faça três versões desse programa, cada uma usando uma estrutura de repetição
diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
programa? Por que?
*/

//habilitando o readline-sync
const readline = require('readline-sync');

//variáveis da questão
let soma = 0;
let n = 0;
let p = 0;

//utilizando FOR
for(let i = 0; i <= 1000; i++) {
    if((i % 2 == 0) && (p <= 50)) {
        soma += i;
        p++;
    }
}

console.log(`SOMA = ${soma}`);

//utilizando WHILE
soma = 0;
p = 0;

while(n <= 1000) {
    if((n % 2 == 0) && (p <= 50)) {
        soma += n;
        p++;
    }
    n++;
}

console.log(`\nSOMA = ${soma}`);

//utilizando DO-WHILE
soma = 0;
n = 0;
p = 0;

do {
    if((n % 2 == 0) && (p <= 50)) {
        soma += n;
        p++;
    }
    n++;
} while(n <= 1000);

console.log(`\nSOMA = ${soma}`);


