const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController')

router.get('/', controller.home);
router.get('/detalle', controller.detallePelicula);
router.get('/carrito', controller.carrito);
router.get('/login', controller.login);
router.get('/registro', controller.registro);

module.exports = router;