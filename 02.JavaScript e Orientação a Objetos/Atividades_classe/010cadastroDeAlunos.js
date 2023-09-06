//importando a biblioteca readline-sync
const readline = require('readline-sync');

//objetos aluno
const aluno1 = {
    matricula: 1,
    nome: "Ana Silva",
    notas: [8, 7, 6],
};

const aluno2 = {
    matricula: 2,
    nome: "Paulo Costa",
    notas: [10, 5.5, 6],
};

//variáveis globais do sistema
let loop = true;
const alunos = [aluno1, aluno2];
let gerador_matricula = 2;
let soma = 0;
let op;

//módulo principal
while(loop) {
    console.log(`
=== CADASTRO DE ALUNOS ===
========== MENU ==========
0 - Sair do Sistema
1 - Listar todos os Alunos
2 - Cadastrar um Novo Aluno
3 - Buscar um Aluno
4 - Alterar um Aluno
5 - Remover um Aluno
==========================`);

let opcao = readline.questionInt('Escolha uma opção: ');

switch(opcao) {
    case 0:
        loop = false;
        console.log('\nSistema encerrado...\n');
        break;

    case 1:
        console.log('Listando todos os alunos');
        console.log('------------------------\n');

        for(let a of alunos) {
            console.log(`Matrícula: ${a.matricula}`);
            console.log(`Nome: ${a.nome}`);

            for(let n = 0; n < a.notas.length; n++) {
                console.log(`\tNota ${++n}: ${a.notas[--n]}`);
                soma += a.notas[n];
            }

            console.log(`Média: ${soma/3}`);
            console.log(' ');
            soma = 0;
        }
        break;

    case 2:
        console.log('\nCadastrando aluno');
        console.log('-----------------');

        let nomeAluno = readline.question('\nDigite o nome do aluno: ');
        let notasAluno = [];

        for(let i = 0; i < 3; i++) {
            notasAluno[i] = readline.questionFloat(`Digite a ${i+1}° nota: `);
        }

        const aluno = {
            matricula: ++gerador_matricula,
            nome: nomeAluno,
            notas: notasAluno,
        };

        alunos.push(aluno);

        console.log('\nAluno cadastrado com sucesso: \n');
        console.log(`Matrícula: ${aluno.matricula}`);
        console.log(`Nome: ${aluno.nome}`);
        for(let n = 0; n < aluno.notas.length; n++) {
            console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
            soma += aluno.notas[n];
        }
        console.log(`Média: ${soma/3}`);
        console.log('');
        readline.keyInPause();
        soma = 0;
        break;

    case 3:
        console.log('\nBuscando Aluno');
        console.log('--------------');
        let matriculaBusca = readline.questionInt('\nDigite o n° de matrícula: ');
        let busca = false;
        
        for(const aluno of alunos) {
            if(aluno.matricula === matriculaBusca) {
                console.log('\nResultado da busca');
                console.log('------------------');
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                for(let n = 0; n < aluno.notas.length; n++) {
                    console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                    soma += aluno.notas[n];
                }
                console.log(`Média: ${soma/3}`);
                console.log('');
                readline.keyInPause();
                soma = 0;
                busca = true;
            } 
        }

        if(busca == false) {
            console.log('\nAluno não encontrado!\n');
            console.log('');
            readline.keyInPause();
        }
        
        break;

    case 4:
        console.log('\nAlterando Aluno');
        console.log('--------------');
        let alt = readline.questionInt('\nDigite o n° de matrícula: ');
        let b = false;
        
        for(const aluno of alunos) {
            if(aluno.matricula === alt) {
                console.log('\nCadastro do aluno');
                console.log('------------------');
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                for(let n = 0; n < aluno.notas.length; n++) {
                    console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                    soma += aluno.notas[n];
                }
                console.log(`Média: ${soma/3}`);
                console.log('________________\n');
                soma = 0;
                b = true;

                do{
                    op = readline.questionInt(`
                    
O que deseja alterar?
---------------------
0. Nome
1. Nota 1
2. Nota 2
3. Nota 3
4. Sair
____________________
n°: `);
                    switch(op) {
                        case 0:
                            nomeAlunoAlt = readline.question('\nDigite o nome do aluno: ');
                            aluno.nome = nomeAlunoAlt;
                            console.log('\n________________________________');
                            console.log('Alteração realizada com sucesso.');
                            console.log('----------------------------------');
                            console.log(`Matrícula: ${aluno.matricula}`);
                            console.log(`Nome: ${aluno.nome}`);
                            for(let n = 0; n < aluno.notas.length; n++) {
                                console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                                soma += aluno.notas[n];
                            }
                            console.log(`Média: ${soma/3}`);
                            console.log('________________\n');
                            soma = 0;
                            op = 4;
                            break;
                        
                        case 1:
                            aluno.notas[0] = readline.questionFloat('\nDigite a 1° nota: ');
                            console.log('\n________________________________');
                            console.log('Alteração realizada com sucesso.');
                            console.log('----------------------------------');
                            console.log(`Matrícula: ${aluno.matricula}`);
                            console.log(`Nome: ${aluno.nome}`);
                            for(let n = 0; n < aluno.notas.length; n++) {
                                console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                                soma += aluno.notas[n];
                            }
                            console.log(`Média: ${soma/3}`);
                            console.log('________________\n');
                            soma = 0;
                            op = 4;
                            break;

                        case 2:
                            aluno.notas[1] = readline.questionFloat('\nDigite a 2° nota: ');
                            console.log('\n________________________________');
                            console.log('Alteração realizada com sucesso.');
                            console.log('----------------------------------');
                            console.log(`Matrícula: ${aluno.matricula}`);
                            console.log(`Nome: ${aluno.nome}`);
                            for(let n = 0; n < aluno.notas.length; n++) {
                                console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                                soma += aluno.notas[n];
                            }
                            console.log(`Média: ${soma/3}`);
                            console.log('________________\n');
                            soma = 0;
                            op = 4;
                            break;
                        
                        case 3:
                            aluno.notas[2] = readline.questionFloat('\nDigite a 3° nota: ');
                            console.log('\n________________________________');
                            console.log('Alteração realizada com sucesso.');
                            console.log('----------------------------------');
                            console.log(`Matrícula: ${aluno.matricula}`);
                            console.log(`Nome: ${aluno.nome}`);
                            for(let n = 0; n < aluno.notas.length; n++) {
                                console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                                soma += aluno.notas[n];
                            }
                            console.log(`Média: ${soma/3}`);
                            console.log('________________\n');
                            soma = 0;
                            op = 4;
                            break;
                        
                            case 4:
                                break;
                            
                            default:
                                console.log('\nOpção incorreta. Tente novamente.');
                                break;
                    }

            }while(op !== 4);
                readline.keyInPause();
        }

        if(b == false) {
            console.log('\nAluno não encontrado!\n');
            console.log('');
            readline.keyInPause();
        }
        break;

    }
}

}