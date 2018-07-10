var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ficha = Schema({
    
    //dataDoAtendimento : Date,
    sintomas : String,
    doença : String,
    hipertenso : Boolean,
    alergico : Boolean,
    diabetes : Boolean,
    prescricao : String,
    // paciente : Paciente,
    observacoes : Boolean,
    localidade: {
        type: Schema.Types.ObjectId ,
        ref: 'Localidade'
    }
    
})

var localidade = Schema({
    nome : String,
    fichas : [ficha]
})

var Ficha = mongoose.model('Ficha', ficha);
var Localidade = mongoose.model('Localidade', localidade);

module.exports = Ficha,Localidade;

Localidade.find({}).populate('fichas.localidade').exec(function(err, localidade) {
    console.log("ok");
})


