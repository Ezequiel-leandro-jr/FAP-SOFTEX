//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a classe pessoa
class Pessoa {
    constructor(nome, idade, profissao, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.cidade = cidade;
    }

    get getNome() {
        return this.nome;
    }

    get getIdade() {
        return this.idade;
    }

    get getProfissao() {
        return this.profissao;
    }

    get getCidade() {
        return this.cidade;
    }
}

//criando os 4 objetos pessoa
const pessoa1 = new Pessoa('NOME........Ezequiel', 'IDADE.......31', 'PROFISSAO...Professor', 'CIDADE......Recife');
const pessoa2 = new Pessoa('NOME........Palloma', 'IDADE.......30', 'PROFISSAO...Recursos Humanos', 'CIDADE......Surubim');
const pessoa3 = new Pessoa('NOME........Marcelo', 'IDADE.......50', 'PROFISSAO...Advogado', 'CIDADE......Sao Paulo');
const pessoa4 = new Pessoa('NOME........Roberta', 'IDADE.......18', 'PROFISSAO...Estudante', 'CIDADE......Natal');

//criando o array pessoas 
const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];


//estrutura de For of e For in aninhadas para exibir resultado
for(let pessoa of pessoas) {
    console.log('\n');
    for(let i in pessoa) {
        console.log(`${pessoa[i]}`);
    }
}


