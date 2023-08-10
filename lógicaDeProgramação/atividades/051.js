/*
função mensagemPersonalizada com parâmetro padrão sendo "normal", e as demais opções
"negrito" e "itálico"
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função mensagemPersonalizada
function mensagemPersonalizada(m, op = 1){
    switch(op){
        case 1:
            console.log(m);
            break;
        case 2:
            console.log(m.bold());
            break;
        case 3:
            console.log(m.italics());
            break;
        default:
            console.log('Operação inválida!');
            break;

    }
}

//chamada de função
mensagemPersonalizada('Ezequiel', 3);

