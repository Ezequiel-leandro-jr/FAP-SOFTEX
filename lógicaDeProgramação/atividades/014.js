/*
João precisa calcular seu Índice de Massa Corporal (IMC) para avaliar seu peso ideal. 
Sabendo que a fórmula para calcular o IMC é: peso ÷ altura², 
crie um programa que calcule e informe a classificação do IMC.
*/

//código para habilitar o readline sync de entrada de dados do usuário
const readline = require("readline-sync");

//Criação da função IMC
function IMC(p, a){
    return p/(a*a);
}

//pedido dos valores de peso e altura
let peso = readline.questionFloat('Informe o peso em Kg (use ponto ao invés de vírgula): ');
let altura = readline.questionFloat('Informe a altura em M (use ponto ao invés de vírgula): ');

//cálculo do IMC
let imc = IMC(peso, altura);

//Impressão dos resultados
if(imc <= 18.5){
    console.log('João está ABAIXO DO PESO\nIMC =', imc);
} else if( imc > 18.5 && imc <= 24.9){
    console.log('João está no PESO IDEAL\nIMC =', imc);
} else if( imc >= 25 && imc <= 29.9){
    console.log('João está em SOBREPESO\nIMC =', imc);
} else if(imc >= 30 && imc <= 34.9){
    console.log('João está em OBESIDADE GRAU 1\nIMC =', imc);
} else if(imc >= 35 && imc <= 39.9){
    console.log('João está em OBESIDADE GRAU 2\nIMC =', imc);
} else{
    console.log('João está em OBESIDADE GRAU 3\nIMC =', imc);
}



