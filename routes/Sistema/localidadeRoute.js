var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Sistema/Localidade');

const { validateParam, validateBody, schemas } = require('../../validation/validator');

router.route('/localidade')
    .get(controller.getAll)

router.route('/localidade/:id')

    .get(validateParam(schemas.idSchema, 'id'), controller.getById)
    .put([validateParam(schemas.idSchema, 'id'), validateBody(schemas.localidadeSchema)],
                        controller.update)
    .delete(validateParam(schemas.idSchema, 'id'), controller.delete)

router.route('/localidade/:id_Endereco/endereco')

    .post([validateParam(schemas.idSchema, 'id_Endereco'),validateBody(schemas.localidadeSchema)] ,controller.postLocalidadeEndereco)

router.route('/localidade/:id_Localidade/:id_Ficha')

    .post([validateParam(schemas.idSchema, 'id_Localidade'),validateParam(schemas.idSchema, 'id_Ficha')],
                        controller.postLocalidadeFicha)


module.exports = router;