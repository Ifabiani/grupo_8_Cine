const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
const multer = require('multer');
const path = require('path');

const fs = require('fs');

const usersFilePath = path.join(__dirname, '../Data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
const validacionesRegistro = require('../Middlewares/validacionesRegistro')
const validacionesLogin = require('../Middlewares/validacionesLogin')


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
       cb(null, './public/Images');
    },
    filename: function (req, file, cb) {
       cb(null, `usuario-${users[users.length - 1].id + 1}`);
    }
})

const upload = multer({storage:storage});

//Ruta que trae el formulario de registro
router.get('/registro', controller.registro);

//Ruta que carga el formulario de registro
router.post('/', upload.single('imagen'), validacionesRegistro, controller.crear);

//Ruta que trae un usuario a editar
router.get('/editar/:id', controller.editar);

//Ruta que edita un usuario 
router.post('/editar/:id', upload.single('imagen'), controller.update);

//Ruta que elimina un producto en particular
router.get('/eliminar/:id', controller.eliminar);

//Ruta que trae el formulario de login
router.get('/login', controller.login);

//Ruta que logea a un usuario
router.post('/logeo', controller.logeo);





module.exports = router