//habilitando o input de dados através da biblioteca readline-sync
const readline = require("readline-sync");

do{
         num = readline.questionFloat('Digite um número par: ');

         if(num % 2 == 0){
             console.log('\nO número par digitado foi o', num);
       } else if(num % 2 != 0){
             console.log("\nO valor é ímpar! Tente novamente.\n");
       } else {
             throw new Error("\nCaractere inválido! Tente novamente.\n");
        }

} while(num % 2 != 0);
