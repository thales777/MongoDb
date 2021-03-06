var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var localidade = new Schema({
    nome : String,
    fichas: [{ type: Schema.Types.ObjectId, ref: 'ficha' }],
    gerente: { type: Schema.Types.ObjectId, ref: 'gerente' },
    atendentes: [{ type: Schema.Types.ObjectId, ref: 'atendente' }],
    endereco: { type: Schema.Types.ObjectId, ref: 'endereco' }
} ,{ versionKey: false } )

const Localidade = mongoose.model('localidade', localidade);

module.exports = Localidade;



