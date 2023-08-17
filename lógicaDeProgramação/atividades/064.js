/*
Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexsitente 
desse objeto dentro de um bloco try..catch. Capture o erro e o exiba 
"Erro: Propriedade não encontrada"
*/

try{
    const pessoa = {
        nome: "Ezequiel",
        idade: 31,
    };
    
    if(pessoa.salario == undefined){
        throw "";
    }

    console.log(pessoa.nome);

} catch(error){
    console.log('\nErro: propriedade inexistente!');
   
} finally{
    console.log("...")
}