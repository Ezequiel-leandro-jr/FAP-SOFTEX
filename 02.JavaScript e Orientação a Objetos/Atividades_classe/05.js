/*
03. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada
estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ:
15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o
estado destino do produto e o programa retorne o preço final do produto acrescido do
imposto correspondente ao estado onde será vendido. O programa deve mostrar uma
mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.
*/

//habilitando readline-sync
const readline = require('readline-sync');

//objeto compra
const compra = {
    valor: 0,
    destino: null,
    preco: 0
}

//função precoFinal
function precoFinal(destino, valor) {
    let n = 0;

    switch(destino) {
        case 'MG':
            n = parseFloat((valor * 0.93).toFixed(2));
            console.log(`
            
==== RECIBO ====
VALOR: R$${valor}
ESTADO: ${destino}
IMPOSTO: 7%
PREÇO FINAL: R$${n} 
-----------------`);
            break;
        case 'SP':
            n = parseFloat((valor * 0.88).toFixed(2));
            console.log(`
            
==== RECIBO ====
VALOR: R$${valor}
ESTADO: ${destino}
IMPOSTO: 12%
PREÇO FINAL: R$${n} 
-----------------`);
            break;
        case 'RJ':
            n = parseFloat((valor * 0.85).toFixed(2));
            console.log(`
            
==== RECIBO ====
VALOR: R$${valor}
ESTADO: ${destino}
IMPOSTO: 15%
PREÇO FINAL: R$${n} 
-----------------`);
            break;
        case 'MS':
            n = parseFloat((valor * 0.92).toFixed(2));
            console.log(`

==== RECIBO ====
VALOR: R$${valor}
ESTADO: ${destino}
IMPOSTO: 8%
PREÇO FINAL: R$${n} 
-----------------`);
            break;
        default:
            console.log('\nERRO: estado inválido!');
    }
}

//módulo principal
console.log('\n=== SOFTEXPRESS ===\n');

compra.valor = readline.questionFloat('Valor da compra: ');
compra.destino = readline.question('Estado da entrega <MG, SP, RJ, MS>: ');
compra.destino = compra.destino.toUpperCase();

precoFinal(compra.destino, compra.valor);



