/*
calculadora usando função sem retorno com valores padrão
*/

//habilitação da biblioteca readline-sync
const readline = require('readline-sync');

//criação da função saudacao
function calculadora(n1, n2 = 0, op = "+"){
    let r;
    switch(op){
        case "+":
            r = n1 + n2;
            console.log(`${n1} ${op} ${n2} = ${r}`);
            break;
        case "-":
            r = n1 - n2;
            console.log(`${n1} ${op} ${n2} = ${r}`);
            break;
        case "*":
            r = n1 * n2;
            console.log(`${n1} ${op} ${n2} = ${r}`);
            break;
        case "/":
            r = n1 / n2;
            console.log(`${n1} ${op} ${n2} = ${r}`);
            break;
    }
}

//chamada da função
// console.log('CALCULADORA');
// let num1 = readline.questionFloat('Digite o primeiro valor: ');
// let num2 = readline.questionFloat('Digite o segundo valor: ');
// let operador = readline.question('Digite a operação >> + - * / : ');
//calculadora(num1, num2, operador);

calculadora(2);

/*Como está usando o readline, ele não irá funcionar. Escreva os valores diretamente na chamada
da função para observar melhor*/
