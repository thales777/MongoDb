const { JWT_SECRET } = require('../@Config/index')
var JWT = require('jsonwebtoken')

module.exports = signToken = user => {
    return JWT.sign({
      iss: 'APS',
      sub: user.id,
      type: user.tipo,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, JWT_SECRET);
}