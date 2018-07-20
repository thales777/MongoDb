//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')


//Conectando o MongoDb

mongoose.connect('mongodb://thales:tatiana7@ds018498.mlab.com:18498/mercado', {
    useNewUrlParser: true
});

//Rotas

var fichaRoute = require('./routes/Sistema/fichaRoute');
var localidadeRoute = require('./routes/Sistema/localidadeRoute')
var pacienteRoute = require('./routes/Pessoa/pacienteRoute')
var enderecoRoute = require('./routes/Sistema/enderecoRoute')
var adminRoute = require('./routes/Pessoa/adminRoute')
var gerenteRoute = require('./routes/Pessoa/gerenteRoute')
var atendenteRoute = require('./routes/Pessoa/atendenteRoute')

//Configurações do App

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/', fichaRoute);
app.use('/', localidadeRoute);
app.use('/', pacienteRoute);
app.use('/', enderecoRoute);
app.use('/', adminRoute);
app.use('/', gerenteRoute);
app.use('/', atendenteRoute);

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})