var mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var user = new Schema({
    login : String,
    senha : String,
    tipo: {
      type: String,
      enum: ['Gerente','Diretor','Atendente'],
    },
    token: String,
    diretor: { type: Schema.Types.ObjectId , ref: 'diretor'},
    atendente: { type: Schema.Types.ObjectId , ref: 'atendente'},
    gerente: { type: Schema.Types.ObjectId , ref: 'gerente'},
    paciente: { type: Schema.Types.ObjectId , ref: 'paciente'}
}, { versionKey: false } )

user.pre('save', async function(next) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Generate a password hash (salt + hash)
      const passwordHash = await bcrypt.hash(this.senha, salt);
      // Re-assign hashed version over original, plain text password
      this.senha = passwordHash;
      next();
    } catch(error) {
      next(error);
    }
  });

var User = mongoose.model('user', user);

module.exports = User;