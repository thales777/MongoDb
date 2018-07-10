var express = require('express');
var router = express.Router();
const controller = require('../controller/Localidade');

router.route('/localidade')

    .post(controller.post)
    .get(controller.getAll)

module.exports = router;