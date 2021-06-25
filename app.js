require('dotenv').config();

const express = require('express')
const hbs     = require('hbs');

const app = express()
const port = process.env.PORT;

//Para renderizar con handlebars...
app.set('view engine', 'hbs');

//Para registrar recursos parciales, o reutilizables...
hbs.registerPartials(__dirname + '/views/partials');

// Para servir contenido estatico...
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Esteban Barrios',
        titulo: 'Road Trip'
    });
})

app.get('/generic/', (req, res) => {
    res.render('generic', {
        nombre: 'Esteban Barrios',
        titulo: 'Road Trip'
    });
});

app.get('/elements/', (req, res) => {
    res.render('elements', {
        nombre: 'Esteban Barrios',
        titulo: 'Road Trip'
    });
});

app.get('*', (req, res) => {
    //res.send(404, '404 | page not found perro...')
    res.sendFile(__dirname + '/views/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})