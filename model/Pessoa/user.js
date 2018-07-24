var mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var user = new Schema({
    login : String,
    senha : String,
    tipo: String,
    diretor: { type: Schema.Types.ObjectId , ref: 'diretor'},
    atendente: { type: Schema.Types.ObjectId , ref: 'atendente'},
    gerente: { type: Schema.Types.ObjectId , ref: 'gerente'},
    paciente: { type: Schema.Types.ObjectId , ref: 'paciente'}
})

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
  
  user.methods.isValidPassword = async function(newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.senha);
    } catch(error) {
      throw new Error(error);
    }
  }

var User = mongoose.model('user', user);

module.exports = User;