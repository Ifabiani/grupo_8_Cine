const path = require('path');
const {body} = require('express-validator');
let validacionesRegistro = [
    body('nombre').notEmpty().withMessage('El campo nombre no puede estar vacío').bail().isLength({min:2}).withMessage("El campo nombre debe contener al menos dos caracteres"),
    body('apellido').notEmpty().withMessage('El campo apellido no puede estar vacío'),
    body('nacimiento').notEmpty().withMessage('El campo nacimiento no puede estar vacío'),
    body('email').notEmpty().withMessage('El campo email no puede estar vacío').bail().isEmail().withMessage('Debes colocar un email válido'),
    body('password').notEmpty().withMessage('El campo contraseña no puede estar vacío').bail().isLength({min:8}).withMessage('La contraseña debe ser mayor a 8 caracteres'),
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error ('Eliga una imagen');
        } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validacionesRegistro