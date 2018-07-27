var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var endereco = new Schema({
    rua : String,
    bairro : String,
    uf : String,
    cep : String,
    numero : Number,
    localidade: { type: Schema.Types.ObjectId, ref: 'localidade' }
} , { versionKey: false } )

const Endereco = mongoose.model('endereco', endereco);

module.exports = Endereco;

