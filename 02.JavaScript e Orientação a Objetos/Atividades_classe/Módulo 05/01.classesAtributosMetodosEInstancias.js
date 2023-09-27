//habilitando a biblioteca readline-sync
import readline from "readline-sync";

//1° classe: cachorro
class cachorro {
    constructor(nomeDog, fome, tedio, dormindo, cont) {
        nomeDog: nomeDog;
        fome: fome;
        tedio: tedio;
        dormindo: dormindo;
        cont: cont;
    }

    set setNomeDog(nomeDog) {
        this.nomeDog = nomeDog;
    }

    set setFome(fome) {
        this.fome = fome;
    }

    set setTedio(tedio) {
        this.tedio = tedio;
    }

    set setDormindo(dormindo) {
        this.dormindo = dormindo;
    }

    set setCont(cont) {
        this.cont = cont;
    }

    get getNomeDog() {
        return this.nomeDog;
    }

    get getFome() {
        return this.fome;
    }

    get getTedio() {
        return this.tedio;
    }

    get getDormindo() {
        return this.dormindo;
    }

    get getCont() {
        return this.cont;
    }

    latir() {
        
        if((this.fome || this.tedio) && this.cont == 0) {
            console.clear();
            console.log(`\n${this.nomeDog} esta LATINDO! O que pode ser?\n`);
        } else if((this.fome || this.tedio) && this.cont > 0) {
            console.clear();
            console.log(`\n${this.nomeDog} ainda esta LATINDO! O que pode ser?\n`);
        }
    }

    comer() {
        this.fome = false;
        console.log(`\n\n${this.nomeDog} encheu a panca!\n`);
        readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
    }

    brincar() {
        this.tedio = false;
        console.log(`\n\n${this.nomeDog} brincou ate cansar!\n`);
        readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
    }

}

//instanciamento e interação com o objeto derivado da classe cachorro
let cachorro1 = new cachorro();
let op;
let continuar = true;

cachorro1.setNomeDog = readline.question(`Qual e o nome do dog:  `);
cachorro1.setFome = true;
cachorro1.setTedio = true;
cachorro1.setDormindo = false;
cachorro1.setCont = 0;

while(cachorro1.getDormindo === false) {
    cachorro1.latir();
    cachorro1.setCont = 1;

    op = readline.questionInt(`
1. Dar comida
2. Brincar
: `);

    switch(op) {
        case 1:
            cachorro1.comer();
            break;
        case 2: 
            cachorro1.brincar();
            break;
        default:
            console.log('\nOpcao incorreta!\n');
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
            break;
    }

    if(cachorro1.getFome === false && cachorro1.getTedio === false) {
        console.clear();
        cachorro1.setDormindo = true;
        console.log(`\nAgora, ${cachorro1.getNomeDog} esta num sono muuuito profuuundo...\n`);
        readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
        break;
    }
}



//2° classe: ventilador
class ventilador {
    constructor() {
        this.ligado = false,
        this.limpo = false,
        this.quebrado = true;
    }

    get getLimpo() {
        return this.limpo;
    }

    get getQuebrado() {
        return this.quebrado;
    }

    ligar() {
        console.clear();
        if(this.limpo == false || this.quebrado == true) {
            console.log(`\n\nO ventilador nao esta ligando...\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
        } else {
            console.log(`\n\nVoce ligou o ventilador!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
            this.ligado = true;
            continuar = false;
        }
    }

    limpar() {
        console.clear();
        if(this.limpo === false) {
            console.log(`\n\nVoce limpou o ventilador!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
            this.limpo = true;
        } else {
            console.log(`\n\nO ventilador já está limpo!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
        }
    }

    consertar() {
        console.clear();
        if(this.quebrado === true) {
            console.log(`\n\nVoce consertou o ventilador!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
            this.quebrado = false;
        } else {
            console.log(`\n\nO ventilador ja esta consertado!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
        }
    }
}

//instanciamento e interação com o objeto derivado da classe ventilador
let ventilador1 = new ventilador();


while(continuar) {
    console.clear();
    op = readline.questionInt(`
Opcoes do ventilador
1. Ligar
2. Limpar
3. Consertar
: `);

    switch(op) {
        case 1:
            ventilador1.ligar();
            break;
        case 2:
            ventilador1.limpar();
            break;
        case 3:
            ventilador1.consertar();
            break;
        default:
            console.clear();
            console.log(`\n\nOpcao invalida!\n`);
            readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});
            break;
    }
}


//3° classe: aluno
class aluno {
    constructor() {
        nome: null;
        matricula: null;
        notas: null;
        media: null;
        aprovado: null;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    set setMatricula(matricula) {
        this.matricula = matricula;
    }

    set setNotas(notas) {
        this.notas = notas;
    }

    set setMedia(media) {
        this.media = media;
    }

    set setAprovado(aprovado) {
        this.aprovado = aprovado;
    }

    get getNome() {
        return this.nome;
    }

    get getMatricula() {
        return this.matricula;
    }

    get getNotas() {
        return this.notas;
    }

    get getMedia() {
        return this.media;
    }

    get getAprovado() {
        return this.aprovado;
    }

}

//instanciamento e interação com o objeto derivado da classe aluno
let aluno1 = new aluno();
let listaNotas = new Array(3);
let soma = 0;

console.clear();
console.log(`\tCADASTRO DE ALUNO\n`);
aluno1.setNome = readline.question('Digite o nome do aluno: ');
aluno1.setNome = aluno1.getNome.toUpperCase();
aluno1.setMatricula = readline.question('Digite a matricula do aluno: ');
for(let i = 0; i < listaNotas.length; i++) {
    listaNotas[i] = readline.questionFloat(`Digite a nota ${i+1}: `);
    soma += listaNotas[i]; 
}
aluno1.setNotas = listaNotas;
aluno1.setMedia = soma / listaNotas.length;
if(aluno1.getMedia >= 7) {
    aluno1.setAprovado = true;
} else {
    aluno1.setAprovado = false;
}

aluno1.setMedia = parseFloat(aluno1.getMedia.toFixed(2));

console.log(`
${aluno1.getNome}
------------------------------------`);
for(let i = 0; i < aluno1.getNotas.length; i++) {
    console.log(`NOTA ${i+1}: ${aluno1.getNotas[i]}`);
}
console.log(`MEDIA: ${aluno1.getMedia}`);
if(aluno1.getAprovado === true) {
    console.log(`SITUACAO: APROVADO`);
} else{
    console.log(`SITUACAO: REPROVADO`);  
}
console.log('------------------------------------');
readline.question('\t<enter para continuar...>', {hideEchoBack: true, mask: ''});



//4° classe: cliente















