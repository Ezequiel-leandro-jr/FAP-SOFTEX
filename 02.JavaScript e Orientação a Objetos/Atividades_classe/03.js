/*
01.Faça um programa que leia o nome do aluno, três notas e mostre o nome e a
média(aritmética) do aluno.
*/

//habilitando a readline-sync
const readline = require('readline-sync');

//objeto aluno
const aluno = {
    nome: null,
    notas: [0, 0, 0],
    soma: 0,
    media: 0
};

//função fnotas
function fnotas(n) {
    for(let i in n) {
        n[i] = readline.questionFloat(`NOTA ${++i}: `);
    }
}

//função fsoma
function fsoma(n) {
    let s = 0;

    for(let i in n) {
        s += n[i];
    }

    return s;
}

//função fmedia
function fmedia(s) {
    let m = s / 3;
    return parseFloat(m.toFixed(2));
}

//função cabecalho
function cabecalho() {
    console.log('\n==== ESCOLA TÉCNICA ESTADUAL SOFTEX ====\n')
}

//função fboletim
function fboletim(nome, notas, media) {
    console.log('\n== BOLETIM ==\n');
    console.log(`NOME: ${aluno.nome}\n`);
    for(let i in notas) {
        console.log(`NOTA ${++i}: ${aluno.notas[--i]}`);
    }
    console.log(`\nMÉDIA: ${aluno.media}`);
}

//módulo principal
cabecalho();

aluno.nome = readline.question('NOME DO ALUNO: ');

fnotas(aluno.notas);

aluno.soma = fsoma(aluno.notas);

aluno.media = fmedia(aluno.soma);

fboletim(aluno.nome, aluno.notas, aluno.media);








