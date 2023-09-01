/*
06. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
taxas devidas.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//objeto encanador
const encanador = {
    valorDiaria: 30,
    diasTrabalhados: 0,
    salarioLiquido: 0,
    descontoPorcento: 0.92
};

//função quantiaLiquida
function quantiaLiquida(valorDiaria, diasTrabalhados, salarioLiquido, descontoPorcento) {
    console.log('=== SALÁRIO DO ENCANADOR ===');

    diasTrabalhados = readline.questionInt('\nQuantos dias foram trabalhados?\n=> ');
    salarioLiquido = (valorDiaria * diasTrabalhados) * descontoPorcento;
    salarioLiquido = parseFloat(salarioLiquido.toFixed(2));

    console.log(`
---------------------------------
VALOR DA DIÁRIA.......R$30.00
DIAS TRABALHADOS......${diasTrabalhados}
DESCONTOS.............8%

QUANTIA LÍQUIDA.......R$${salarioLiquido}
---------------------------------
`);
};

//módulo principal
quantiaLiquida(encanador.valorDiaria, encanador.diasTrabalhados, encanador.salarioLiquido, encanador.descontoPorcento);
