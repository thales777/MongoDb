var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Sistema/Ficha');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/ficha')

    .get(controller.getAll)

router.route('/ficha/:id')
    
    .get(controller.getById)

    .put(validateBody(schemas.fichaSchema),controller.update)

    .delete(controller.delete)

router.route('/ficha/:id/paciente')

    .post(validateBody(schemas.fichaSchema),controller.postNewFichaPaciente)

module.exports = router;
