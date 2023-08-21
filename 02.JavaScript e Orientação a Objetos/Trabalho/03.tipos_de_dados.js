/*
Crie variáveis dos tipos boolean, BigInt, string e symbol.
Primeiro, declare-as e imprima, exibindo seus conteúdos (UNDEFINED).
Em seguida, deixe-as com valor nulo, e imprima (NULL).
Por fim, cada uma recebe um tipo de variável, e imprima.
*/

//criação das variáveis, sem atribuição de valores
let var1, var2, var3, var4;

//impressão das variáveis, esperando como resultado UNDEFINED
console.log(`var1 = ${var1}\nvar2 = ${var2}\nvar3 = ${var3}\nvar4 = ${var4}\n`);

//atribuição de valor nulo às variáveis
var1 = null;
var2 = null;
var3 = null;
var4 = null;

//impressão do valor nulo
console.log(`var1 = ${var1}\nvar2 = ${var2}\nvar3 = ${var3}\nvar4 = ${var4}\n`);

//atribuição de um dos 4 tipos de variáveis da questão para cada uma
var1 = true;
var2 = BigInt(1344256324634n);
var3 = "Hello, World!";
var4 = Symbol("Símbolo");

//impressão das variáveis e seus respectivos valores
console.log(`var1 = ${var1}\nvar2 = ${var2}\nvar3 = ${var3}\nvar4 =`, var4);


