/*
Três notas de três alunos e sua média
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando variaveis das médias dos alunos e das disciplinas
let somaAlunos = [0, 0, 0];
let somaDisciplinas = [0, 0, 0];

//criando a matriz vazia com 3 arrays de 3 elementos cada
let notasAlunos = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//preenchendo as 3 notas dos 3 alunos
for(let i = 0; i < notasAlunos.length; i++){
    for(let j = 0; j < notasAlunos[i].length; j++){
        notasAlunos[i][j] = readline.questionFloat(`Digite a nota da disciplina ${j+1} do aluno ${i+1}: `);
    }
}
console.log(notasAlunos);

//calculando medias dos alunos
for(let i = 0; i < somaAlunos.length; i++){
    for(let j = 0; j < somaAlunos.length; j++){
        somaAlunos[i] += notasAlunos[i][j];
    }
    
}
console.log(somaAlunos);

//calculando medias das disciplinas
for(let i = 0; i < somaDisciplinas.length; i++){
    for(let j = 0; j < somaDisciplinas.length; j++){
        somaDisciplinas[i] += notasAlunos[j][i];
    }
    
}
console.log(somaDisciplinas);

//imprimindo a média de cada aluno
console.log('\n=====MÉDIAS DOS ALUNOS=====');
for(let i = 0; i < somaAlunos.length; i++){
    console.log(`Aluno ${i+1} = ${somaAlunos[i]/somaAlunos.length}`);
}

//imprimindo a média de cada disciplina
console.log('\n=====MÉDIAS DAS DISCIPLINAS=====');
for(let i = 0; i < somaDisciplinas.length; i++){
    console.log(`Disciplina ${i+1} = ${somaDisciplinas[i]/somaDisciplinas.length}`);
}


console.log(notasAlunos[0][0] + notasAlunos[1][1] + notasAlunos[2][2]);



