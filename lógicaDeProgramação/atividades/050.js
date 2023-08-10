/*
função para apresentação onde os parâmetros possuem valores padrão caso nenhum seja passado
pelo usuário
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função apresentacao
function apresentacao(n = 'humano(a)', i = 'tantos', p = 'devzin'){
    console.log(`Olá, eu sou ${n}, tenho ${i} anos e sou ${p}.`);
}

//chamada de função
apresentacao();

