var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Paciente');

const { validateParam, validateBody, schemas } = require('../../validation/validator');

router.route('/paciente')

    .get(controller.getAll)

router.route('/paciente/:id')

    .get(validateParam(schemas.idSchema, 'id') , controller.getById)
    .put(validateParam(schemas.idSchema, 'id') ,controller.update)
    .delete(validateParam(schemas.idSchema, 'id') ,controller.delete)

router.route('/paciente/:id/endereco')

    .post(validateParam(schemas.idSchema, 'id'), controller.post)

module.exports = router;