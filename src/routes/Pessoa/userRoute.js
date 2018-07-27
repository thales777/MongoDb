var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/User');
var validateToken = require('../../security/validateToken')

const {validateBody, schemas } = require('../../validation/validator');

router.route('/user')

    .get(validateToken, controller.getAll)
    .post(validateBody(schemas.userSchema),controller.login)
    
router.route('/user/:id')
    
    .get(validateToken, controller.getById)
    .put(validateToken, validateBody(schemas.userSchema),controller.update)
    .delete(validateToken, controller.delete)

router.route('/user/:id/atendente')

    .post(validateToken, validateBody(schemas.userSchema),controller.postAtendente)

router.route('/user/:id/gerente')

    .post(validateToken, validateBody(schemas.userSchema),controller.postGerente)

module.exports = router;