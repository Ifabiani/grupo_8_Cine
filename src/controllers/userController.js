const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../Data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator');
const { log } = require('console');


const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {

    registro: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/registro.ejs'))},
        

    crear: (req, res) => {
    const errors = validationResult(req);

    
    
    if (errors.isEmpty()){
        let imageName;
        if (req.file != undefined) {
                imageName = req.file.filename
        } else {
                    imageName = 'default-image.png'
        }
        
        for (let i=0; i<users.length; i++){
            if (users[i].email == req.body.email){
                res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: [{msg: 'Ya existe un usuario con el email declarado'}]})}}
       

        let newUser = {
                id: users[users.length - 1].id + 1,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                imagen: imageName
        };
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/');
    }else{
        res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: errors.array(), old: req.body})                    
    }
    // res.redirect('/')
    // res.render((path.join(__dirname,'../Views/home.ejs')), {products: products})
    },

    editar: (req, res) => {
        let id = req.params.id
        let userToEdit = users.find(
            user => user.id == id
        )
        res.render(path.join(__dirname,'../Views/users/editarUsuario.ejs'), {userToEdit})
        },

    update: (req, res) => {
        
        let id = req.params.id;
		let userToEdit = users.find(user => user.id == id)

		
        let imageName;
        if (req.file != undefined) {
                imageName = req.file.filename
        } else {
                    imageName = 'default-image.png'
        }
		    userToEdit = {
            id: userToEdit.id,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            imagen: imageName,       
			
		};
        		
		let newUsers = users.map(user => {
			if (user.id == userToEdit.id) {
				return user = {...userToEdit};
			}
			return user;
		})

		fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
		res.redirect('/usuarios/registrar');
    },

    eliminar: (req, res) => {
		let id = req.params.id;
		let finalUsers = users.filter(user => user.id != id);

		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect('/usuarios/registrar');
	},

    login: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/login.ejs'))
    },

    logeo:(req, res)=> {

    const errors = validationResult(req);
        let usuarioALoguearse
    if (errors.isEmpty()){
        let usersFilePath = path.join(__dirname, '../Data/users.json');
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        
        for (let i=0; i<users.length; i++){
            if (users[i].email == req.body.email){
                if (bcrypt.compareSync(req.body.password, users[i].password)){
                    usuarioALoguearse = users[i];               
                }
               
            }
            
        }
        if(req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
        }
        
        if(usuarioALoguearse == undefined){
            res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: [{msg: 'Credenciales inválidas'}
        ]})
        }
        delete usuarioALoguearse.password;
        req.session.usuarioLogueado = usuarioALoguearse;    
        
         
    
        
    }else{
        res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: errors.array(), old: req.body})

    }
    
    
    res.redirect('/')
    
    },

    logout: function(req, res, file){
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    //Controlador que muestra todos los productos (GET)
    usuarios: (req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        res.render(path.join(__dirname,'../Views/users/usuarios.ejs'), {users : users})
    },

    //Controlador que muestra el perfil solicitado (GET)
    perfil: (req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        
        res.render(path.join(__dirname,'../Views/users/perfil.ejs'), {user : req.session.usuarioLogueado})
    }
    

}

module.exports = userController;
// module.exports = users;

