var express = require('express');
const router = require('express-promise-router')();
const controller = require('../controller/Localidade');

router.route('/localidade')
    .get(controller.getAll)

router.route('/localidade/endereco')
    .post(controller.postEndereco)

router.route('/localidade/:id')

    .get(controller.getById)
    .put(controller.update)
    .delete(controller.delete)

router.route('/localidade/:id_Endereco/endereco')

    .post(controller.postLocalidadeEndereco)

router.route('/localidade/:id_Localidade/:id_Ficha')

    .post(controller.postLocalidadeFicha)


module.exports = router;