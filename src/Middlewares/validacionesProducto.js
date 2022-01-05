const {body} = require('express-validator');
let validacionesProducto = [
    body('name').notEmpty().withMessage('El campo título no puede estar vacío').bail().isLength({min:5}).withMessage('El título debe contener al menos 5 caracteres'),
    // body('origin').notEmpty().withMessage('El campo origen no puede estar vacío'),
    // body('genero').notEmpty().withMessage('El campo género no puede estar vacío'),
    // body('calification').notEmpty().withMessage('El campo calificación no puede estar vacío'),
    // body('length').notEmpty().withMessage('El campo duración no puede estar vacío'),
    // body('rating').notEmpty().withMessage('El campo rating no puede estar vacío'),
    body('synopsis').notEmpty().withMessage('El campo sinopsis no puede estar vacío').bail().isLength({min:20}).withMessage('La sinopsis debe contener al menos 20 caracteres'),
    // body('imagen').notEmpty().withMessage('Debe cargar una imagen').bail().isIn(["JPG","JPEG","PNG","GIF"]).withMessage('La extensión de la imagen debe ser JPG, JPEG, PNG o GIF')
]

module.exports = validacionesProducto