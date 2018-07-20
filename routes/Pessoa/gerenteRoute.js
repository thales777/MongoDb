var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Gerente');

router.route('/gerente')

    .get(controller.getAll)

router.route('/gerente/:id')

    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)

router.route('/:id/gerente')

    .post(controller.post)

module.exports = router;