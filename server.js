const express = require('express');
const hbs = require('hbs');

const app = express();
app.use(express.static(__dirname + '/public/'));

//Configurar puerto (util para cuando se ejecuta en modo no local, por ej Heroku)
const port = process.env.PORT || 3000;

//Exporto de esta manera porque lo que tiene este archivo
//se tiene que ejecutar todo
require('./hbs/helpers');

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'federico gonzalez'
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});