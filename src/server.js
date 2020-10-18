//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// const hbs = require("express-handlebars");


// iniciando o express 
const server = express()
server
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine com
    .set('views', path.join(__dirname, 'views'))
    .set('view engine','hbs')

    //criar uma rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(5500)