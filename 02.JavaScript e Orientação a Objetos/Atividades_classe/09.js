/*
07. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
em segundos, de uma experiência biológica. O programa deve informar o horário
(hora:minuto:segundo) de término da mesma.
*/

//habilitando readline-sync
const readline = require('readline-sync');

//objeto experimento
const experimento = {
    horarioInicio: " ",
    hmsInicio: [0, 0, 0],
    segundosInicio: 0,
    horarioFinal: " ",
    segundosTotal: 0
};

//função conversaoSegundos
function conversaoSegundos(hmsInicio, segundosInicio) {
    segundosInicio = (hmsInicio[0] * 3600) + (hmsInicio[1] * 60) + hmsInicio[2];
}

//função conversaoHms
function conversaoHms(segundosTotal, horarioFinal) {
    let h = segundosTotal / 3600;
    let resto = segundosTotal % 3600;
    let m = resto / 60;
    let s = resto % 60;
    horarioFinal = console.log(`${h}:${m}:${s}`);

    return horarioFinal;
}

//módulo principal
experimento.horarioInicio = readline.question('Digite a hora inicial do experimento, no formato [hh:mm:ss] => ');

experimento.hmsInicio = experimento.horarioInicio.split(':');

conversaoSegundos(experimento.hmsInicio, experimento.segundosInicio);

experimento.segundosTotal = readline.questionInt('Digite o tempo, em segundos, de duração do experimento: ');

experimento.segundosTotal += experimento.segundosInicio;

conversaoHms(experimento.segundosTotal, experimento.horarioFinal);

console.log(experimento.hmsInicio);

console.log(`

=== EXPERIMENTO BIOLÓGICO ===
INÍCIO ÀS ${experimento.horarioInicio}
TÉRMINO ÀS ${experimento.horarioFinal}
-----------------------------
`);
