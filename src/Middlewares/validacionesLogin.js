const {body} = require('express-validator');
let validacionesLogin = [
    body('email').notEmpty().withMessage('El campo nombre no puede estar vacío').bail().isEmail().withMessage('Debe indicar un mail correcto'),
    body('password').notEmpty().withMessage('Debe ingresar la contraseña'),
]

module.exports = validacionesLogin