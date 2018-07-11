var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var localidade = new Schema({
    nome : String,
    fichas: [{ type: Schema.Types.ObjectId, ref: 'ficha' }],
    endereco: { type: Schema.Types.ObjectId, ref: 'endereco' }
})

const Localidade = mongoose.model('localidade', localidade);

module.exports = Localidade;



