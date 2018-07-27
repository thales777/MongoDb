//Imports

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var expressValidator = require('express-validator');
var validateToken = require('./src/security/validateToken')

//Conectando o MongoDb

mongoose.connect('mongodb://thales:tatiana7@ds018498.mlab.com:18498/mercado', {
    useNewUrlParser: true
});

//Rotas

var fichaRoute = require('./src/routes/Sistema/fichaRoute');
var localidadeRoute = require('./src/routes/Sistema/localidadeRoute')
var pacienteRoute = require('./src/routes/Pessoa/pacienteRoute')
var enderecoRoute = require('./src/routes/Sistema/enderecoRoute')
var diretorRoute = require('./src/routes/Pessoa/diretorRoute')
var gerenteRoute = require('./src/routes/Pessoa/gerenteRoute')
var atendenteRoute = require('./src/routes/Pessoa/atendenteRoute')
var userRoute = require('./src/routes/Pessoa/userRoute')

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

    res.setHeader('Access-Control-Expose-Headers', "authorization")

    // Pass to next layer of middleware
    next();
});

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(expressValidator())

app.use('/',userRoute); 
app.use('/',validateToken,fichaRoute);
app.use('/',localidadeRoute);
app.use('/',pacienteRoute);
app.use('/',enderecoRoute);
app.use('/',diretorRoute);
app.use('/',gerenteRoute);
app.use('/',atendenteRoute);

//Setando a App
app.listen(8080, function () {
    console.log('HTPP// 8080')
})