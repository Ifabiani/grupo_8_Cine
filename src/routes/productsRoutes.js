const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');
const authMiddleware = require('../Middlewares/authMiddleware.js')
const adminMiddleware = require('../Middlewares/adminMiddleware.js')

const fs = require('fs');

const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
       cb(null, './public/Images');
    },
    filename: function (req, file, cb) {
       cb(null, `pelicula-${products[products.length - 1].id + 1}`);
    }
})

const upload = multer({storage:storage});

//Ruta que muestra todas las peliculas
router.get('/', authMiddleware, adminMiddleware, controller.productos)

//Ruta que trae y crea peliculas
router.get('/crear', authMiddleware, adminMiddleware, controller.crear);
router.post('/', upload.single('imagen'), authMiddleware , adminMiddleware, controller.store)

//Ruta del carrito de peliculas
router.get('/carrito', authMiddleware, controller.carrito);

//Ruta que muestra el detalle de una pelicula en particular
router.get('/:id', controller.detallePelicula);

//Ruta que trae el formulario para editar una película
router.get('/edit/:id', authMiddleware, adminMiddleware, controller.editar);

//Ruta que edita una película en particular
router.put('/editar/:id', upload.single('imagen'), authMiddleware, adminMiddleware, controller.update);

//Ruta que elimina un producto en particular
router.delete('/eliminar/:id', authMiddleware, adminMiddleware, controller.eliminar);









module.exports = router