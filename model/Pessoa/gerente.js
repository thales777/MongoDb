var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var gerente = new Schema({
    nome : String,
    cpf : String,
    localidade: { type: Schema.Types.ObjectId , ref: 'localidade'}
    
})

var Gerente = mongoose.model('gerente', gerente);

module.exports = Gerente;
