/*
Try..Catch..Finally

Try: bloco de código que pode lançar uma exceção
Catch: Bloco de Código que será executado se uma exceção for lançada
Finally: Parte opcional do código que será executado após o bloco try ou após o bloco catch
É sempre executado, mesmo se uma exceção não for lançada.
*/

try{
    const pessoa = {
        nome: "Maria",
        idade: 30,
    };
    console.log(cliente.salario);
} catch(error){
    console.log("[Erro]");
    console.log(error.message);
    //console.error("[Erro]", error.message);
} finally{
    console.log("Aqui sempre será executado...")
}

//em catch(error), o nome error poderia ser qualquer outro, pois é a variável do parâmetro
//que receberá o bloco de texto do erro.