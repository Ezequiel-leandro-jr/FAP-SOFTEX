/*
Crie um programa que recebe do teclado uma string não númerica em um número utilizando
parseInt dentro de um bloco try..catch. Capture o erro e o exiba "Erro: Conversão Inválida"
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando e inicializando as variáveis
let str = "";

//bloco principal
try{
    str = readline.question('Digite uma string não numérica: ');

    

    if(isNaN(str) == true){
        throw " "
    }

    str = parseInt(str);
    
} catch(erro){
    console.log('Erro: Conversão inválida!');
} finally{
    console.log('...');
}
