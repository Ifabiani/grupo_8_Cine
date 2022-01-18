const express = require('express');
const router = express.Router();
const controller = require('../apiControllers/apiProductsController');

router.get('/', controller.movies);
router.get('/:id', controller.detail)

module.exports = router