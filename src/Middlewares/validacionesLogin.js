const {body} = require('express-validator');
let validacionesLogin = [
    body('email').notEmpty().withMessage('Debe ingresar un email').bail().isEmail().withMessage('Debe indicar una dirección de email correcta'),
    body('password').notEmpty().withMessage('Debe ingresar la contraseña'),
]

module.exports = validacionesLogin