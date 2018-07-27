var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var diretor = new Schema({    
    nome : String
} , { versionKey: false } )

var Diretor = mongoose.model('diretor', diretor);

module.exports = Diretor;
