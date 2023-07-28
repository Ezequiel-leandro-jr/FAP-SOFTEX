/*
João precisa descobrir todos os números múltiplos de 3 existentes entre 3 e 100. 
Lembrando que múltiplo de 3 e o resultado de qualquer número que multiplicamos por 3 exemplo ( 3 x 2 = 6 ) . 
Então 6 é múltiplo de 3.

Crie um programa que imprima somente os números múltiplos de 3, existente entre 3 e 100.
*/

for(let i = 3; i <= 100; i++){
    if(i % 3 == 0){
        console.log(i," ");
    }
}
