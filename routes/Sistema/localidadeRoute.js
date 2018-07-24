var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Sistema/Localidade');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/localidade')
    .get(controller.getAll)

router.route('/localidade/:id')

    .get(controller.getById)
    .put(validateBody(schemas.localidadeSchema),controller.update)
    .delete(controller.delete)

router.route('/localidade/:id_Endereco/endereco')

    .post(validateBody(schemas.localidadeSchema),controller.postLocalidadeEndereco)

router.route('/localidade/:id_Localidade/:id_Ficha')

    .post(controller.postLocalidadeFicha)


module.exports = router;