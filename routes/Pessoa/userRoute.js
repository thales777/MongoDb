var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/User');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/user')

    .get(controller.getAll)
    .post(validateBody(schemas.userSchema),controller.login)
    
router.route('/user/:id')
    
    .get(controller.getById)
    .put(validateBody(schemas.userSchema),controller.update)
    .delete(controller.delete)

router.route('/user/:id/atendente')

    .post(validateBody(schemas.userSchema),controller.postAtendente)

router.route('/user/:id/gerente')

    .post(validateBody(schemas.userSchema),controller.postGerente)

module.exports = router;