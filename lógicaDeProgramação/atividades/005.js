/*
1.Classifique um número em três categorias: negativo, zero ou positivo
2.Verifique se um número é divisível por 2, 3 ou 5
3.Classifique uma variável em quatro categorias: booleana, numérica, string ou indefinida
4.Classifique um número em cinco categorias: negativo, zero, positivo, par ou ímpar
5.Verifique se um número é divisível por 2,3,5 ou 7
*/

const readline = require("readline-sync");

//1.Classifique um número em três categorias: negativo, zero ou positivo
let n1;

n1 = readline.questionFloat('Digite um número: ');

if(n1 == 0){
    console.log('O número é igual a ZERO!');
}else if(n1 > 0){
    console.log('O número é POSITIVO!');
}else{
    console.log('O número ´NEGATIVO!');
}

//2.Verifique se um número é divisível por 2, 3 ou 5
let n2;

n2 = readline.questionInt('Digite um número inteiro: ');

if(n2 % 2 == 0){
    console.log('Este número é divisível por 2');
}else if(n2 % 3 == 0){
    console.log('Este número é divisível por 3');
}else if(n2 % 5 == 0){
    console.log('Este número é divisível por 5');
}

//3.Classifique uma variável em quatro categorias: booleana, numérica, string ou indefinida

//4.Classifique um número em cinco categorias: negativo, zero, positivo, par ou ímpar

//5.Verifique se um número é divisível por 2,3,5 ou 7