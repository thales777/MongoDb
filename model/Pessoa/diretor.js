var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var diretor = new Schema({    
    nome : String
})

var Diretor = mongoose.model('diretor', diretor);

module.exports = Diretor;
