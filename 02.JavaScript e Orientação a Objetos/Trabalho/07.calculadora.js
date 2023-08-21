/*
criando uma calculadora
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função calculadora
function calculadora(n1, op, n2) {
    let resp;

    if(op == '+'){
        resp = n1 + n2;
    } else if(op == '-') {
        resp = n1 - n2;
    } else if(op == '*') {
        resp = n1 * n2;
    } else if(op == '/') {
        resp = n1 / n2;
    } else if(op == '**') {
        resp = n1 ** n2;
    } else if(op == '%') {
        resp = n1 % n2;
    } else {
        console.log('\nERRO: operação inválida. Tente novamente!\n');
    }

    return resp;
}

//variáveis globais
let numero1, numero2, operador, continuar, resultado, resto;

//módulo principal
while(continuar) {
    console.log('\n===== CALCULADORA =====\n');
    numero1 = readline.questionFloat('Digite o 1° valor: ');
    operador = readline.question('Operação:\n+ soma\n- subtração\n* multiplicação\n / divisão\n% resto da divisão\n** exponenciação\n: ');
    numero2 = readline.questionFloat('Digite o 2° valor: ');

    resultado = calculadora(numero1, operador, numero2);

    if(operador == '+'){
        console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(op == '-') {
        console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(op == '*') {
        console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(op == '/') {
        if(numero1 % numero2 != 0) {
            resto = numero1 % numero2;
            console.log(`\n${numero1} ${operador} ${numero2} = ${resultado} (resto: ${resto})`);
        } else {
            console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
        }
    } else if(op == '**') {
        console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(op == '%') {
        console.log(`\n${numero1} ${operador} ${numero2} = ${resultado}`);
    } else {
        console.log(resultado);
    }


    
}