/*
Crie um programa que calcule a média entre três notas digitadas pelo usuário.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando as variáveis globais das três notas e da média
let nota1, nota2, nota3, media;

//criando a função calc_media
function calc_media(n1, n2, n3) {
    let m = (n1 + n2 + n3) / 3;
    return m;
}

//comandos para entrada das notas
console.log('====== CALCULANDO A MÉDIA ======')
nota1 = readline.questionFloat('NOTA 1: ');
nota2 = readline.questionFloat('NOTA 2: ');
nota3 = readline.questionFloat('NOTA 3: ');
console.log('================================\n\n');

//chamada da função para calcular a média, atribuindo o retorno à variável media
media = calc_media(nota1, nota2, nota3);
//fazendo com que o valor decimal da variável média tenha apenas duas casas decimais
media = parseFloat(media.toFixed(2));

//impressão
console.log('========== RESULTADO ==========');
console.log(`NOTA 1: ${nota1}\nNOTA 2: ${nota2}\nNOTA 3: ${nota3}\n\nMÉDIA:  ${media}\n===============================`);



