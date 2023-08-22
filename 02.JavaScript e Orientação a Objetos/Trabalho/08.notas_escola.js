//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//declaração das variáveis globais
let notas = new Array(3);
let soma = 0;
let media = 0;
let resultado;

/*PRIMEIRO CÓDIGO:

Média de 3 notas para saber se o aluno reprovou ou não.

*/

//função media
function media_aluno(soma) {
    let m = soma / 3;
    return m;
}

//módulo principal
console.log('\n\n====== ESCOLA SOFTEX ======\n');

//comando de repetição para atribuir as 3 notas
for(let i = 0; i < notas.length; i++) {
    notas[i] = readline.questionFloat(`NOTA ${i+1}: `);
    soma += notas[i];
}

//chamada da função atribuindo o retorno à variável media
media = media_aluno(soma);
//o valor da média apresentando apenas 2 casas decimais
media = parseFloat(media.toFixed(2));

//operador ternário para verificar se o aluno foi aprovado/reprovado
resultado = (media >= 7) ? `\nAPROVADO! MÉDIA ${media}` : `\nREPROVADO! MÉDIA ${media}`;

//impressão do resultado
console.log(`\n\n------ RESULTADO ------\n${resultado}\n\n\n`);


//===============================================================================================
//===============================================================================================


/*SEGUNDO CÓDIGO:
retornando a mínima nota para ficar na média = 7
*/

//resetando os valores atribuídos às variáveis anteriores
notas = [0, 0, 0];
soma = 0;
media = 0;
resultado = 0;

//função nota_minima
function nota_minima(soma) {
    let min = 21 - soma;
    return min;
}

//módulo principal
console.log('\n\n====== ESCOLA SOFTEX ======\n');

//comando de repetição para atribuir 2 de 3 notas
for(let i = 0; i < notas.length - 1; i++) {
    notas[i] = readline.questionFloat(`NOTA ${i+1}: `);
    soma += notas[i];
}

//chamada da função, atribuindo o retorno à variável resultado
resultado = nota_minima(soma);
//o valor de resultado apresentando apenas 2 casas decimais
resultado = parseFloat(resultado.toFixed(2));

//impressão do resultado
console.log(`\n\n------ RESULTADO ------\n\nMÉDIA: 7.00\nNOTA MÍNIMA PARA ALCANÇAR A MÉDIA: ${resultado}\n`);

