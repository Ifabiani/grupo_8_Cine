const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
const multer = require('multer');
const path = require('path');
const guestMiddleware = require('../Middlewares/guestMiddleware.js')
const authMiddleware = require('../Middlewares/authMiddleware.js')
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../Data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
const validacionesRegistro = require('../Middlewares/validacionesRegistro')
const validacionesLogin = require('../Middlewares/validacionesLogin')


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
       cb(null, './public/Images/Users');
    },
    filename: function (req, file, cb) {
       cb(null, `usuario-${users[users.length - 1].id + 1}`);
    }
})

const upload = multer({storage:storage});

//Ruta que trae el formulario de registro
router.get('/registrar', guestMiddleware, controller.registro);

//Ruta que carga el formulario de registro
router.post('/registrar', upload.single('imagen'), validacionesRegistro, controller.crear);

//Ruta que trae un usuario a editar
router.get('/editar/:id', controller.editar);

//Ruta que edita un usuario 
router.put('/editar/:id', upload.single('imagen'), controller.update);

//Ruta que elimina un usuario en particular
router.get('/eliminar/:id', controller.eliminar);

//Ruta que trae el formulario de login
router.get('/login', guestMiddleware, controller.login);

//Ruta que logea a un usuario
router.post('/login', upload.single('imagen'), validacionesLogin, controller.logeo);

//Ruta para deslogear un usuario
router.get('/logout', authMiddleware, controller.logout);





module.exports = router