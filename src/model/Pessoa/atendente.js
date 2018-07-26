var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var atendente = new Schema({
        nome : String,
        cpf : String,
        sexo : Boolean,
        qtdFichas : Number
    }, { versionKey: false } )

var Atendente = mongoose.model('atendente', atendente);

module.exports = Atendente;
