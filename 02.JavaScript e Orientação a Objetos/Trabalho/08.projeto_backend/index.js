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
        console.log('\nERRO: operacao invalida. Tente novamente!\n');
    }

    return resp;
}

//variáveis globais
let numero1, numero2, operador, resultado, resto;
let continuar = true;

//módulo principal
while(continuar) {

    operador = null;

    console.log('\n===== CALCULADORA =====\n');
    numero1 = readline.questionFloat('Digite o primeiro valor: ');
    operador = readline.question('\n<<Operacao>>\n\n+ Soma\n\n- Subtracao\n\n* Multiplicacao\n\n / Divisao\n\n% Resto da divisao\n\n** Exponenciacao\n_____________\n=> ');
    numero2 = readline.questionFloat('\nDigite o segundo valor: ');

    resultado = calculadora(numero1, operador, numero2);

    if(operador == '+'){
        console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(operador == '-') {
        console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(operador == '*') {
        console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(operador == '/') {
        if(numero1 % numero2 != 0) {
            resto = numero1 % numero2;
            console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado} (resto: ${resto})`);
        } else {
            console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
        }
    } else if(operador == '**') {
        console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
    } else if(operador == '%') {
        console.log(`\nResultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
    } else {
        console.log(resultado);
    }

    console.log('\n ');
    
    while(operador != 'sim' && operador != 'nao'){
        operador = readline.question('Deseja realizar nova operacao? <sim / nao>: ');
        operador = operador.toLocaleLowerCase();
        
        if(operador == 'sim') {
            continuar = true;
        } else if(operador == 'nao') {
            continuar = false;
        } else {
            console.log('\nResposta invalida! Tente novamente.\n')
        }
    }
    
}