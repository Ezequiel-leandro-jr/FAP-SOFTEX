/*
criar uma função que conte quantas vogais há numa string
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a função contarVogais
function contarVogais(sentence){
  const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let soma = 0;
  for(let i = 0; i < vogais.length; i++) {
    if(vogais.includes(sentence[i])) {
      soma++;
    }
  }
  console.log(`Quantidade de vogais na string: ${soma}`);
}


//comandos para criação da string pelo usuário
let palavra = readline.question('Digite uma palavra: ');

//chamada da função
contarVogais(palavra);