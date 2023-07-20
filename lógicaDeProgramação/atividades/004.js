/*
Baseado em IF, faça:
1. Verifique se o número é positivo
2. Verifique se um número é par
3. Verifique se uma string é vazia
4. Verifique se um número é maior que 10
5. Verifique se uma variável é do tipo booleano
*/

/* Como usar método para entrada de dados pelo node.js
. $ npm install
--no código
const readline = require("readline-sync");
Exemplo de var:
var nome = readline.question("Digite seu nome: ");
--se fosse um número inteiro, era .questionInt, e assim por diante. */

const readline = require("readline-sync");

/*//1. Verifique se o número é positivo
let n1;

n1 = readline.questionFloat('Digite um número: ');

if(n1 >= 0){
    console.log("O número ", n1," é POSITIVO");
}else{
    console.log("O número ", n1," é NEGATIVO");
}
*/ 

/*
//2. Verifique se um número é par
let n2;

n2 = readline.questionInt('Digite um número inteiro: ');

if(n2 % 2 == 0){
    console.log("O número ", n2, " é PAR!");
}else{
    console.log("O número ", n2, " é ÍMPAR!");
}
*/

/*
//3. Verifique se uma string é vazia
let n3=" ";

n3 = readline.question("Escreva um nome: ");

if(n3.length == 0){
    console.log('A string está VAZIA!')
}else{
    console.log('A string possui ', n3.length, ' caracteres!');
}
*/

/*
//4. Verifique se um número é maior que 10
let n4;

n4 = readline.questionFloat('Digite um número: ');

if(n4 > 10){
    console.log("O número ", n4, " é MAIOR que 10!");
}else{
    console.log("O número ", n4, " é MENOR que 10!");
}
*/

/*
//5. Verifique se uma variável é do tipo booleano
let n5;

n5 = 'oi';
boo = true;

if(typeof n5 == typeof boo){
    console.log("A variável é do tipo booleano!");
}else{
    console.log("A variável NÃO é do tipo booleano!");
}
*/