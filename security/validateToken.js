const { JWT_SECRET } = require('../@Config/index')
var JWT = require('jsonwebtoken')

module.exports = validateToken = function(request, response, next) {
        var authHeader = request.headers["authorization"];
        if(authHeader) {
                JWT.verify(authHeader, JWT_SECRET, function(error, decodedToken) {
                    if(error) {
                        return response.status(401).send({ "success": false, "error": "Invalid authorization token" });
                    }
                    request.decodedToken = decodedToken;
                    next();
                })
        } else {
            response.status(401).send({ "success": false, "error": "An authorization header is required" });
        }
    }