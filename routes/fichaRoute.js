var express = require('express');
const router = require('express-promise-router')();
const controller = require('../controller/Ficha');

router.route('/ficha')

    .get(controller.getAll)

router.route('/ficha/:id')
    
    .get(controller.getById)

    .put(controller.update)

    .delete(controller.delete)

router.route('/ficha/:id/paciente')

    .post(controller.postNewFichaPaciente)

module.exports = router;
