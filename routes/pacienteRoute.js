var express = require('express');
const router = require('express-promise-router')();
const controller = require('../controller/Paciente');

router.route('/paciente')

    .get(controller.getAll)

router.route('/paciente/endereco')

    .post(controller.postEndereco)

router.route('/paciente/:id')

    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)

router.route('/paciente/:id/endereco')

    .post(controller.post)

module.exports = router;