/*
Criando função para calcular média de um array
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função calcularMedia
function calcularMedia(n){
    let soma = 0;
    for(let i = 0; i < n.length; i++){
        soma += n[i];
    }

    console.log(`MÉDIA = ${soma/n.length}`);
}

//comandos para criação do array
let val = readline.questionInt('Diga de quantos valores você irá extrair uma média: ');

let lista = new Array(val);

//comandos para preencher o array
for(i = 0; i < lista.length; i++){
    lista[i] = readline.questionFloat(`Digite o ${i+1}° valor: `);
}

//chamada da função imprimirLista
calcularMedia(lista);