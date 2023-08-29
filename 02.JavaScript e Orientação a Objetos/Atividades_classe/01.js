//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

/*
Como você cria um objeto vazio, chamado pessoa em JavaScript?
*/

let pessoa = {};

console.log(pessoa);

/*
    Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado pessoa?
*/

pessoa.nome = 'João';

console.log(pessoa);

/*
    Como você acessa o valor da propriedade "idade" de um objeto chamado usuario?
*/

let usuario = {
    nome: 'Ezequiel',
    idade: 31,
}

console.log(usuario['idade']);

/*
Suponha que você tenha um objeto 'produto' com a propriedade 'preco' definida como 50. 
Como você altera o valor dessa propriedade para 75?
*/

let produto = {
    preco: 50,
}

console.log(produto);

produto.preco = readline.questionFloat('Defina um novo preço para o produto: ');

console.log(produto);

/*
Como você remove a propriedade email do objeto contato?
*/

let contato = {
    email: 'bilonguinho@email.com',
}

console.log(contato);

delete contato.email;

console.log(contato);

/*
Como você adiciona uma propriedade 'endereco' com o valor 'Rua A, 123' a um objeto existente chamado 'cliente'?
*/

let cliente = {
    nome: 'Robson',
    idade: 55,
}

console.log(cliente);

cliente['endereco'] = readline.question('Digite o endereço do cliente: ');

console.log(cliente);

/*
Se você tem um objeto 'empresa' com uma propriedade 'departamentos', como você acessa o nome do primeiro departamento?
*/

let empresa = {
    departamentos: ['RH', 'Financeiro', 'T.I'],
}

console.log(empresa);

console.log(empresa.departamentos[0]);

/*
Suponha que você tenha um objeto 'aluno' com a propriedade 'notas' contendo [85, 90, 78].
Como você altera a segunda nota para 95?
*/

let aluno = {
    notas: [85, 90, 78]
}

console.log(aluno);

aluno.notas[1] = readline.questionFloat('Digite um novo valor para a 2° nota do aluno: ');

console.log(aluno);

/*
Remova o segundo valor do array [10, 20, 30] da propriedade 'valores' do objeto 'dados'
*/

let dados = {
    valores: [10, 20, 30]
}

console.log(dados);

dados.valores.splice(1, 1);

console.log(dados);

/*
Crie um objeto com as propriedades 'titulo' e valor 'livro' e 'autor' com valor 'Maria'
*/

let objeto = new Object;
console.log(objeto);
objeto.titulo = 'Livro';
objeto['autor'] = 'Maria';
console.log(objeto);
