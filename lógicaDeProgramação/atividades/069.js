/*
Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }; 
Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. 
Se sim, exiba "Nome do estudante: idade" no console.

*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando o objeto da questão
const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};

//iterando com for in verificando se há algum estudante com 19 anos
for(let i in estudantes) {
    if(estudantes[i] == 19) {
        console.log(`NOME: ${i}, IDADE: ${estudantes[i]} anos.`);
    }
}

