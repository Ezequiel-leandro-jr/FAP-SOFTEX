/*
Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array no console, um por um
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função imprimirLista
function imprimirLista(n){
    console.log('\nELEMENTOS DO ARRAY:')
    for(let i = 0; i < n.length; i++){
        console.log(n[i]);
    }
}

//comandos para criação do array
let elm = readline.questionInt('Diga quantos elementos terá o seu array: ');

let lista = new Array(elm);

//comandos para preencher o array
for(i = 0; i < lista.length; i++){
    lista[i] = readline.questionInt(`Digite o valor do elemento ${i+1}: `);
}

//chamada da função imprimirLista
imprimirLista(lista);