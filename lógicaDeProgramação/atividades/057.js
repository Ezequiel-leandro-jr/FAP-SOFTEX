/* recursividade
Função que chama a si mesma */

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1; //caso base: fatorial de 0 e 1 = 1
    } else {
        return n * fatorial(n - 1); //chamada recursiva
    }
}

//teste da função
const numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

