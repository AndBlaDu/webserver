const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
//express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home')

})

app.get('/about', (req, res) => {

    res.render('about', {
        name: 'andres blanco'
    })

})

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
})