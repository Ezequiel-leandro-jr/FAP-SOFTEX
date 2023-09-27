/*
Programa que recebe do teclado um número e tenta dividir por zero dentro de um bloco try..catch.
Capture o erro e o exiba "Erro: Divisão por zero" no console.
*/

//habilitando a biblioteca readline-sync
import readline from 'readline-sync';

//criação das variáveis
let num = 0;
let divisor = 0;

//comandos principais
try{
    num = readline.questionInt('Digite um numero inteiro positivo e maior que zero: ');
    divisor = readline.questionInt('Digite o valor do divisor: ');

    if(divisor == 0){
        throw " ";
    }

    let result = num / divisor;
    console.log(`\n${num} / ${divisor} = ${result}`);

} catch(erro){
    console.log("\nErro: Divisao por zero.");
} finally{
    console.log('...');
}