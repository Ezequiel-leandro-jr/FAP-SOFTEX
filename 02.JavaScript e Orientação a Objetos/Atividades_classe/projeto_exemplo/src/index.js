const express = require('express');

const app = express();

const porta = 3333;

app.listen(porta, () => {
    console.log('servidor iniciado!');
});

app.get('exemplo', (request, response) => {
    console.log('server OK');
    return response.send('Olá, meu nome é Ezequiel, e este é meu primeiro servidor criado!');
});