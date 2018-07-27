var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Paciente');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/paciente')

    .get(controller.getAll)

router.route('/paciente/:id')

    .get(controller.getById)
    .put(validateBody(schemas.pacienteSchema),controller.update)
    .delete(validateBody(schemas.pacienteSchema),controller.delete)

router.route('/paciente/:id/endereco')

    .post(validateBody(schemas.pacienteSchema),controller.post)

module.exports = router;