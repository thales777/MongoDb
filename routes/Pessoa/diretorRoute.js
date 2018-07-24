var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Diretor');

const {validateBody, schemas } = require('../../validation/validator');

router.route('/diretor/:id')

    .put(validateBody(schemas.diretorSchema),controller.update)

//Login:Diretor Senha:123456
module.exports = router;