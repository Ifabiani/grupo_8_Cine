const path = require('path')
const {body} = require('express-validator');
let validacionesProducto = [
    body('name').notEmpty().withMessage('El campo título no puede estar vacío').bail().isLength({min:5}).withMessage('El título debe contener al menos 5 caracteres'),
    // body('origin').notEmpty().withMessage('El campo origen no puede estar vacío'),
    // body('genero').notEmpty().withMessage('El campo género no puede estar vacío'),
    // body('calification').notEmpty().withMessage('El campo calificación no puede estar vacío'),
    // body('length').notEmpty().withMessage('El campo duración no puede estar vacío'),
    // body('rating').notEmpty().withMessage('El campo rating no puede estar vacío'),
    body('synopsis').notEmpty().withMessage('El campo sinopsis no puede estar vacío').bail().isLength({min:20}).withMessage('La sinopsis debe contener al menos 20 caracteres'),
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

module.exports = validacionesProducto