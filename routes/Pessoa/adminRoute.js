var express = require('express');
const router = require('express-promise-router')();
const controller = require('../../controller/Pessoa/Admin');

router.route('/admin')

    .put(controller.update)

module.exports = router;