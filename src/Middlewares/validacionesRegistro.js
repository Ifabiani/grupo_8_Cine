const {body} = require('express-validator');
let validacionesRegistro = [
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío'),
    body('apellido').notEmpty().withMessage('El campo apellido no puede estar vacío'),
    body('nacimiento').notEmpty().withMessage('El campo nacimiento no puede estar vacío'),
    body('email').notEmpty().withMessage('El campo email no puede estar vacío').bail().isEmail().withMessage('Debes colocar un email válido'),
    body('password').notEmpty().withMessage('El campo password no puede estar vacío').bail().isLength({min:8}),
    body('categoria').notEmpty().withMessage('Debe seleccionar al menos una categoría'),
    body('imagen').notEmpty().withMessage('Debe cargar una imagen')
]

module.exports = validacionesRegistro