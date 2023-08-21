/*
Cadastro de uma pessoa com os dados: nome, salário, idade, e se possui diploma.
Desenvolva o código respeitando os tipos de cada variável.
Certifique-se de que os valores correspondem aos tipos das variáveis
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação das variáveis da questão, sem atribuição de valores
let nome, salario, idade, diploma;

//comandos para o cadastro da pessoa, respeitando o tipo de 
console.log("==========CADASTRO==========")

nome = readline.question('\nNOME: ');
salario = readline.questionFloat('\nSALÁRIO: ');
idade = readline.questionInt('\nIDADE: ');
diploma = readline.question('\nDIPLOMA [sim / nao]: '); //condicional sobre ter o diploma
diploma = diploma.toLowerCase(); //transforma a string para minúsculo
while((diploma != "sim") && (op != "nao")) { //enquanto op for diferente de sim e nao, repita a operação
    console.log('ERRO: dado incorreto! Tente novamente.\n');
    diploma = readline.question('\nDIPLOMA [sim / nao]: ');
    diploma = diploma.toLowerCase();
}

if(diploma == 'sim') { //se diploma for igual a 'sim', receberá true. Do contrário, receberá false.
    diploma = true;
}else {
    diploma = false;
}

//impressão dos dados
console.log('\n\n      CADASTRO REALIZADO!\n______________________________');
console.log(`NOME: ${nome}\nIDADE: ${idade}\nSALÁRIO: ${salario}\nDIPLOMA: ${diploma}\n______________________________ `);
