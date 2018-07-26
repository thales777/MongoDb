var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var paciente = new Schema({
    nome : String,
    cpf : String,
    nomeDaMae : String,
    sexo : Boolean,
    ficha: { type: Schema.Types.ObjectId , ref: 'ficha'},    
    endereco: { type: Schema.Types.ObjectId , ref: 'endereco'}
} , { versionKey: false } )

var Paciente = mongoose.model('paciente', paciente);

module.exports = Paciente;
