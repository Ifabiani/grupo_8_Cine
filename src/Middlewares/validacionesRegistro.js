const {body} = require('express-validator');
let validacionesRegistro = [
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío').bail().isLength({min:2}),
    body('apellido').notEmpty().withMessage('El campo apellido no puede estar vacío'),
    body('nacimiento').notEmpty().withMessage('El campo nacimiento no puede estar vacío'),
    body('email').notEmpty().withMessage('El campo email no puede estar vacío').bail().isEmail().withMessage('Debes colocar un email válido'),
    body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail().isLength({min:8}).withMessage('La contraseña debe ser mayor a 8 caracteres'),
    // body('imagen').notEmpty().withMessage('Debe cargar una imagen').bail().isIn(["JPG","JPEG","PNG","GIF"]).withMessage('La extensión de la imagen debe ser JPG, JPEG, PNG o GIF')
]

module.exports = validacionesRegistro