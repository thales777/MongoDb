var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Sistema/Endereco');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/endereco')

    .post(validateBody(schemas.enderecoSchema) ,controller.postEndereco)
    .get(controller.getEndereco)

module.exports = router;