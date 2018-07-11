var express = require('express');
const router = require('express-promise-router')();
const controller = require('../controller/Ficha');

const { validateParam, validateBody, schemas } = require('../validation/validator');

router.route('/ficha')

    .get(controller.getAll)

router.route('/ficha/:id')
    
    .get(validateParam(schemas.idSchema, 'id') ,controller.getById)

    .put([validateParam(schemas.idSchema, 'id'), validateBody(schemas.fichaSchema)], 
                        controller.update)

    .delete(validateParam(schemas.idSchema, 'id') ,controller.delete)

router.route('/ficha/:id/paciente')

    .post([validateParam(schemas.idSchema, 'id'), validateBody(schemas.fichaSchema)],
                        controller.postNewFichaPaciente)

module.exports = router;
