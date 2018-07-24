var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Atendente');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/atendente')

    .get(controller.getAll)

router.route('/atendente/:id')

    .get(controller.getById)
    .put(validateBody(schemas.atendenteSchema), controller.update)
    .delete(validateBody(schemas.atendenteSchema), controller.delete)
    .post(validateBody(schemas.atendenteSchema), controller.post)

module.exports = router;