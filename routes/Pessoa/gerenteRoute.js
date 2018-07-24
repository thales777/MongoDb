var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Gerente');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/gerente')

    .get(controller.getAll)

router.route('/gerente/:id')

    .get(controller.getById)
    .put(validateBody(schemas.gerenteSchema) ,controller.update)
    .delete(controller.delete)
    .post(validateBody(schemas.gerenteSchema) ,controller.post)

module.exports = router;