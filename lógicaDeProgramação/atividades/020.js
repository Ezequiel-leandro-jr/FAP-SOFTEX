/*
Verifique se o número 25 do array está presente e exiba uma mensagem indicando se ele foi
encontrado ou não
*/

//habilitando o input através da biblioteca "readline-sync"
const readline = require("readline-sync");

//declaração do array da questão e do op
const meuArray = [10, 20, 30, 40, 50];
let op = false

//função includes para buscar elemento do array
if(meuArray.includes(25)){
    console.log('Valor presente no array.');
} else{
    console.log('Valor não encontrado.')
}


/*
//procurando o valor no array usando a função for
    for(let i = 0; i < meuArray.length-1; i++){
        if(meuArray[i] == 25){
            console.log(`valor encontrado no índice ${i}`);
            op = true;
            break;
        }
    }

    if(op == false){
        console.log('Valor não encontrado.')
    }
*/
