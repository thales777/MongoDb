var express = require('express');
var router = express.Router();
const controller = require('../controller/Ficha');

router.route('/ficha')

    .get(controller.getAll)

    .post(controller.post);

    router.route('/ficha/:id')
    
    .get(controller.getById)

    .put(controller.put)

    .delete(controller.delete)

module.exports = router;
