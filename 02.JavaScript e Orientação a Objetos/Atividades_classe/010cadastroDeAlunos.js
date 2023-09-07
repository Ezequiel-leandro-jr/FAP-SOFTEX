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
let alunos = [aluno1, aluno2];
let gerador_matricula = 2;
let soma = 0;
let op;
let matriculaBusca;
let busca = false;
let posicao = 0;
let del;
let aluno_aux = {
    matricula: null,
    nome: "",
    notas: [0, 0, 0],
} ;


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
        console.log('\n\nListando todos os alunos');
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
        matriculaBusca = readline.questionInt('\nDigite o n° de matrícula: ');
        busca = false;
        
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
        console.log('\nAlterando Cadastro');
        console.log('--------------');
        matriculaBusca = readline.questionInt('\nDigite o n° de matrícula: ');
        
        for(const aluno of alunos) {
            if(aluno.matricula === matriculaBusca) {
                posicao = alunos.indexOf(aluno);
                aluno_aux = alunos[posicao];

                console.log('\nCadastro do Aluno');
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
                                    aluno_aux.nome = nomeAlunoAlt;
                                    console.log('\n________________________________');
                                    console.log('Alteração realizada com sucesso.');
                                    console.log('----------------------------------');
                                    console.log(`Matrícula: ${aluno_aux.matricula}`);
                                    console.log(`Nome: ${aluno_aux.nome}`);
                                    for(let n = 0; n < aluno_aux.notas.length; n++) {
                                        console.log(`\tNota ${++n}: ${aluno_aux.notas[--n]}`);
                                        soma += aluno_aux.notas[n];
                                    }
                                    console.log(`Média: ${soma/3}`);
                                    console.log('________________\n');
                                    soma = 0;
                                    op = 4;
        
                                    alunos[posicao] = aluno_aux;
                                    break;
                                
                                case 1:
                                    aluno_aux.notas[0] = readline.questionFloat('\nDigite a 1° nota: ');
                                    console.log('\n________________________________');
                                    console.log('Alteração realizada com sucesso.');
                                    console.log('----------------------------------');
                                    console.log(`Matrícula: ${aluno_aux.matricula}`);
                                    console.log(`Nome: ${aluno_aux.nome}`);
                                    for(let n = 0; n < aluno_aux.notas.length; n++) {
                                        console.log(`\tNota ${++n}: ${aluno_aux.notas[--n]}`);
                                        soma += aluno_aux.notas[n];
                                    }
                                    console.log(`Média: ${soma/3}`);
                                    console.log('________________\n');
                                    soma = 0;
                                    op = 4;
        
                                    alunos[posicao] = aluno_aux;
                                    break;
        
                                case 2:
                                    aluno_aux.notas[1] = readline.questionFloat('\nDigite a 1° nota: ');
                                    console.log('\n________________________________');
                                    console.log('Alteração realizada com sucesso.');
                                    console.log('----------------------------------');
                                    console.log(`Matrícula: ${aluno_aux.matricula}`);
                                    console.log(`Nome: ${aluno_aux.nome}`);
                                    for(let n = 0; n < aluno_aux.notas.length; n++) {
                                        console.log(`\tNota ${++n}: ${aluno_aux.notas[--n]}`);
                                        soma += aluno_aux.notas[n];
                                    }
                                    console.log(`Média: ${soma/3}`);
                                    console.log('________________\n');
                                    soma = 0;
                                    op = 4;
        
                                    alunos[posicao] = aluno_aux;
                                    break;
                                case 3:
                                    aluno_aux.notas[2] = readline.questionFloat('\nDigite a 3° nota: ');
                                    console.log('\n________________________________');
                                    console.log('Alteração realizada com sucesso.');
                                    console.log('----------------------------------');
                                    console.log(`Matrícula: ${aluno_aux.matricula}`);
                                    console.log(`Nome: ${aluno_aux.nome}`);
                                    for(let n = 0; n < aluno_aux.notas.length; n++) {
                                        console.log(`\tNota ${++n}: ${aluno_aux.notas[--n]}`);
                                        soma += aluno_aux.notas[n];
                                    }
                                    console.log(`Média: ${soma/3}`);
                                    console.log('________________\n');
                                    soma = 0;
                                    op = 4;
        
                                    alunos[posicao] = aluno_aux;
                                    break;
                                
                                    case 4:
                                        break;
                                    
                                    default:
                                        console.log('\nOpção incorreta. Tente novamente.');
                                        break;
                            }
                        
                    }while(op !== 4);
                
                busca = true;
                break;
            }
        }

        if(busca == false) {
            console.log('\nAluno não encontrado!\n');
            console.keyInPause();
        }

        break;

    case 5:
        console.log('\nRemovendo Cadastro');
        console.log('--------------------');
        matriculaBusca = readline.questionInt('\nDigite o n° de matrícula: ');
        busca = false;
        
        for(const aluno of alunos) {
            if(aluno.matricula === matriculaBusca) {
                posicao = alunos.indexOf(aluno);
                busca = true;

                console.log('\nCadastro do Aluno');
                console.log('------------------');
                console.log(`Matrícula: ${aluno.matricula}`);
                console.log(`Nome: ${aluno.nome}`);
                for(let n = 0; n < aluno.notas.length; n++) {
                    console.log(`\tNota ${++n}: ${aluno.notas[--n]}`);
                    soma += aluno.notas[n];
                }
                console.log(`Média: ${soma/3}`);
                console.log('--------------------')
                console.log('');
                soma = 0; 

                while(del !== 'sim' && del !== 'nao') {
                    del = readline.question('\nDeseja remover <sim / nao>? => ');
                    del = del.toLowerCase();
                    if(del == 'sim') {
                        alunos.splice(posicao, 1);
                        console.log('\nRemoção concluída!\n');
                   } else if(del == 'nao') {
                      console.log('\nRemoção cancelada.');
                   } else {
                      console.log('\nOpção inválida. Tente novamente.');
                   }
                }
                   
        }
    }

    if(busca == false) {
        console.log('\nAluno não encontrado!\n');
    }

    del = 'del';
    readline.keyInPause();

    break;
}
}
