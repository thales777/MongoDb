var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Atendente');

router.route('/atendente')

    .get(controller.getAll)

router.route('/atendente/:id')

    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)

router.route('/:id/atendente')

    .post(controller.post)

module.exports = router;