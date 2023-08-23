//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//função cabecalho, sem parâmetro e retorno
function cabecalho() {
    console.log(`
====== ESCOLA TÉCNICA ESTADUAL SOFTEX ======
---------------------------------------------
CURSO: Técnico em Desenvolvimento de Sistemas
MÓDULO: 1
DISCIPLINA: Lógica de Programação`);
}

//função aprovacao, com parâmetros e retono
function aprovacao(media) {
    let mensagem;

    if(media <= 3) {
        mensagem = `
SITUAÇÃO: REPROVADO
---------------------------------------------`;
    } else if( media > 3 && media < 7) {
        mensagem = `
SITUAÇÃO: RECUPERAÇÃO
---------------------------------------------`;
    } else if(media >= 7) {
        mensagem = `
SITUAÇÃO: APROVADO
---------------------------------------------`;
    }

    return mensagem;
}

/*
módulo principal
*/

//declaração das variáveis
let notas = new Array(3);
let soma = 0;
let nome = '';
let media = 0;
let resultado = '';
//chamada da função cabecalho
cabecalho();
//entrada de dados pelo usuário
nome = readline.question('DISCENTE: ');
//impressão de linha divisória
console.log('---------------------------------------------');
//estrutura for in para notas
for(let i = 0; i < notas.length; i++) {
    notas[i] = readline.questionFloat(`NOTA ${i+1}: `);
    soma += notas[i];
}
//criação da arrow function para calcular média e exibição posterior da variável media
const med = (soma)=>soma/3;
media = med(soma);
media = parseFloat(media.toFixed(2));
console.log('\nMÉDIA: ', media);
//atribuição da função aprovacao à variável resultado, com exibição posterior
resultado = aprovacao(media);
console.log(resultado);
