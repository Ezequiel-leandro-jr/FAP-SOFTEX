/*
Crie uma função chamada calcularIMC que retorna o IMC
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//função soma
function calcularIMC(p, a){
    let imc = p/(a*a);
    let mensagem;
    if(imc < 17){
        mensagem = `IMC = ${imc} -- muito abaixo do peso`;
    }else if(imc >= 17 && imc <= 18.49){
        mensagem = `IMC = ${imc} -- abaixo do peso`;
    }else if(imc >= 18.5 && imc <= 24.99){
        mensagem = `IMC = ${imc} -- peso normal`;
    }else if(imc >= 25 && imc <= 29.99){
        mensagem = `IMC = ${imc} -- acima do peso`;
    }else if(imc >= 30 && imc <= 34.99){
        mensagem = `IMC = ${imc} -- obesidade I`;
    }else if(imc >= 35 && imc <= 39.99){
        mensagem = `IMC = ${imc} -- obesidade II (severa)`;
    }else if(imc >= 40){
        mensagem = `IMC = ${imc} -- obesidade III (mórbida)`;
    }
    return mensagem;
}

//chamada da função
let peso = readline.questionFloat('Digite o peso em KG: ');
let altura = readline.questionFloat('Digite a altura em M: ');


console.log(calcularIMC(peso, altura));