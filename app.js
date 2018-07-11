//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Conectando o MongoDb

mongoose.connect('mongodb://thales:tatiana7@ds018498.mlab.com:18498/mercado', {
    useNewUrlParser: true
});

//Rotas

var fichaRoute = require('./routes/fichaRoute');
var localidadeRoute = require('./routes/localidadeRoute')
var pacienteRoute = require('./routes/pacienteRoute')

//Configurações do App
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/', fichaRoute);
app.use('/', localidadeRoute);
app.use('/', pacienteRoute);

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})