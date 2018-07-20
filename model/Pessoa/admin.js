var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var admin = new Schema({
    
    nome : String,
    login : String,
    senha : String,
    localidades: [{ type: Schema.Types.ObjectId , ref: 'localidades'}]    
})

var Admin = mongoose.model('admin', admin);

module.exports = Admin;
