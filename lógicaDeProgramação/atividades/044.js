/*
criar uma função que imprime o maior valor de um Array
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função maiorNumero
function maiorNumero(n){
    let r = 0;
    for(let i = 0; i < n.length; i++){
        if(n[i] > r){
            r = n[i];
        }
    }
    console.log(`O maior valor da lista = ${r}`);
}

//comandos para criação do array
let elm = readline.questionInt('Diga quantos elementos terá a sua lista: ');

let lista = new Array(elm);

//comandos para preencher o array
for(i = 0; i < lista.length; i++){
    lista[i] = readline.questionInt(`Digite o valor do elemento ${i+1}: `);
}

//chamada da função
maiorNumero(lista);
