var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var atendente = new Schema({
    
    nome : String,
    login: String,
    senha: String,
    cpf : String,
    sexo : Boolean,
    status : Boolean,
    qtdFichas : Number
})

var Atendente = mongoose.model('atendente', atendente);

module.exports = Atendente;
