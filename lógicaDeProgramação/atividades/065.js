//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando array da questão
const usuarios = [
    {nome: "Robinson", idade: 18},
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maíra", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
]

//imprimindo o array completo
for(let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);  
}

console.log('\n\n');

//imprimindo apenas os nomes contidos no array
for(let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome);  
}

console.log('\n\n');

//imprimindo o nome e a idade de modo literal
for(let i = 0; i < usuarios.length; i++) {
    console.log(`NOME: ${usuarios[i].nome}, IDADE: ${usuarios[i].idade} anos.`);  
}

console.log('\n\n');

//imprimindo usando o método FOR IN
for(let item in usuarios) {
    console.log(`NOME: ${usuarios[item].nome}`);
    console.log(`IDADE: ${usuarios[item].idade} anos\n`);
}

console.log('\n\n');

//imprimindo usando o método FOR OF
for(let item of usuarios) {
    console.log(item.nome);
    console.log(item.idade);
    console.log('\n');
    console.log(`NOME: ${item.nome}, IDADE: ${item.idade} anos`);
    console.log('\n');
}

//criando outras listas
const numeros = [150, 100, 200, 250, 50];
const palavras = ['cadeira', "lápis", 'caneta', "caderno", 'mesa'];
const logicos = [true, false, false, true, true];

//imprimindo numeros usando FOR IN
for(let i in numeros) {
    console.log(numeros[i]);
}

console.log('\n');

//imprimindo numeros usando FOR OF
for(let i of numeros) {
    console.log(i);
}

console.log('\n');

//imprimindo palavras usando FOR IN
for(let i in palavras) {
    console.log(palavras[i]);
}

console.log('\n');

//imprimindo palavras usando FOR OF
for(let i of palavras) {
    console.log(i);
}

console.log('\n');

//imprimindo logicos usando FOR IN
for(let i in logicos) {
    console.log(logicos[i]);
}

console.log('\n');

//imprimindo logicos usando FOR OF
for(let i of logicos) {
    console.log(i);
}

console.log('\n');



