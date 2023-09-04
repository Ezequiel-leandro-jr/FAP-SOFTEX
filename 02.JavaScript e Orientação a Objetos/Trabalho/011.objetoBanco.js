/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem:
conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. 
Observações: 
- buscar saldo deve retornar o valor atual do
saldo;
- para o depósito, você deverá passar um valor
como parâmetro e adicioná-lo no saldo final do
objeto; 
- para o saque, você deverá passar um valor
como parâmetro e subtraí-lo no saldo final do
objeto;
- o número da conta deve retornar o número da
conta.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação do objeto banco
var banco = {
    //propriedades
    conta: '3444-56',
    saldo: 3000,
    tipoDeConta: 'Conta-Corrente',
    agencia: '0123',

    //métodos
    buscarSaldo: function mostrarSaldo() {
        console.log(`\nSALDO................R$${banco.saldo}\n_____________________\n`);
    },
    deposito: function fazerDeposito(valor) {
        banco.saldo += valor;
    },
    saque: function fazerSaque(valor) {
        if((valor <= 0) || (valor > banco.saldo)) {
            console.log(`\n   ERRO: VALOR INVÁLIDO! TENTE NOVAMENTE.\n_____________________\n`);
        } else {
            banco.saldo -= valor;
            console.log(`\n   SAQUE REALIZADO COM SUCESSO!\n_____________________\n`);
        }    
    },
    numeroDaConta: function mostrarNumeroDaConta() {
        console.log(`\nNÚMERO DA CONTA......${banco.conta}\n_____________________\n`);
    }
};

//função menu
function menu(op) {
    let val = 0;

    do {
        console.log('\n==== SOFTEX BANK ====');
        console.log(`
----
MENU
----

1. SALDO
2. DEPÓSITO
3. SAQUE
4. N° DA CONTA
0. SAIR
______________`);

        op = readline.questionInt('=> ');

        switch(op) {
            case 1:
                banco.buscarSaldo();
                break;
            case 2:
                val = readline.questionFloat('\n\n---- DEPÓSITO ----\n\nDIGITE O VALOR: ');
                banco.deposito(val);
                console.log(`    DEPÓSITO REALIZADO COM SUCESSO!\n_____________________\n`);
                break;
            case 3:
                val = readline.questionFloat('\n\n---- SAQUE ----\n\nDIGITE O VALOR: ');
                banco.saque(val);
                break;
            case 4:
                banco.numeroDaConta();
                break;
            case 0:
                console.log('\n\n...\n');
                break;
            default:
                console.log(`   ERRO: OPERAÇÃO INVÁLIDA! TENTE NOVAMENTE.\n_____________________\n`);
                break;
        }
    } while(op != 0);
    
}

//variável op
let op;

//chamada da função menu
menu(op);



