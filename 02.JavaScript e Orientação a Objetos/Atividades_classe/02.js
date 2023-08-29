/*Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias da semana. 
Como você usaria enums para isso e qual seria o benefício?*/

const diasDaSemana = {
    SEGUNDA: 'segunda-feira',
    TERCA: 'terça-feira',
    QUARTA: 'quarta-feira',
    QUINTA: 'quinta-feira',
    SEXTA: 'sexta-feira',
    SABADO: 'sábado',
    DOMINGO: 'domingo'
};

console.log(diasDaSemana);
let dia = diasDaSemana.SABADO;
console.log(dia);

/*Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. 
Como você usaria enums para essa situação?*/
const inimigos = {
    TROLL: 'troll',
    ARQUEIRO: 'arqueiro',
    MAGO: 'mago',
    GUERREIRO: 'guerreiro',
    NINJA: 'ninja'
}

console.log(inimigos);
let inimigo = inimigos.GUERREIRO;
console.log(inimigo);

/*Você está criando um aplicativo de reserva de passagens aéreas e precisa representar os diferentes tipos de classe 
(Econômica, Executiva, Primeira Classe). Como você usaria enums para isso?
*/

const classes = {
    PRIM: 'primeira-classe',
    EXEC: 'executiva',
    ECON: 'econômica'
}

console.log(classes);
let classe = classes.EXEC;
console.log(classe);

/*Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as tarefas em 
"Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?
*/

const tarefas = {
    TAREFA01: 'trabalho',
    TAREFA02: 'estudo',
    TAREFA03: 'lazer'
}

console.log(tarefas);
let tarefa = tarefas.TAREFA01;
console.log(tarefas);

/*Em um aplicativo de e-commerce, você precisa definir os diferentes status de um pedido: 
"Em processamento", "Enviado" e "Entregue". Como você usaria enums para isso?*/

const estatus = {
    PROCESS: 'em processamento',
    ENVIADO: 'enviado',
    ENTREGUE: 'entregue'   
}

console.log(estatus);
let stat = estatus.PROCESS;
console.log(stat);
