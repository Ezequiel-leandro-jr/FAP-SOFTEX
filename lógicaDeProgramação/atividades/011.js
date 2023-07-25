/* Calculadora básica */

const readline = require("readline-sync");

let n1 = readline.questionFloat('Digite o primeiro valor: ');
let op = readline.question('\nEscolha uma operação:\n+ Soma\n- Subtração\n* Multiplicação\n/ Divisão\nR=  ');
let n2 = readline.questionFloat('\nDigite o segundo valor: ');
switch(op){
    case "+":
        console.log(n1,op,n2,"=", n1+n2);
        break;
    case "-":
        console.log(n1,op,n2,"=", n1-n2);
        break;
    case "*":
        console.log(n1,op,n2,"=", n1*n2);
        break;
    case "/":
        console.log(n1,op,n2,"=", n1/n2);
        break;
    default:
        console.log('OPERAÇÃO INVÁLIDA!');
        break;
}