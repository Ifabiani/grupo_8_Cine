const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../Data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator');
const db = require('../database/models')
const { log } = require('console');
const sequelize = db.sequelize;
const { Op} = require('sequelize');


const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userController = {

    registro: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/registro.ejs'))},
        

    // crear: (req, res) => {
    // const errors = validationResult(req);

    
    
    // if (errors.isEmpty()){
    //     let imageName;
    //     if (req.file != undefined) {
    //             imageName = req.file.filename
    //     } else {
    //                 imageName = 'default-image.png'
    //     }
        
    //     for (let i=0; i<users.length; i++){
    //         if (users[i].email == req.body.email){
    //             res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: [{msg: 'Ya existe un usuario con el email declarado'}]})}}
       

    //     let newUser = {
    //             id: users[users.length - 1].id + 1,
    //             ...req.body,
    //             password: bcrypt.hashSync(req.body.password, 10),
    //             imagen: imageName
    //     };
    //     users.push(newUser)
    //     fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    //     res.redirect('/');
    // }else{
    //     res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: errors.array(), old: req.body})                    
    // }
    // // res.redirect('/')
    // // res.render((path.join(__dirname,'../Views/home.ejs')), {products: products})
    // },

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
    },



    //------------------------- CRUD con SQL -------------------------------------------------

    users: (req, res) => {
        db.User.findAll({
            include: ['category']
        })
            .then(users => {
                res.render(path.join(__dirname,'../Views/users/usuarios.ejs'), {users})
            })
    },

    add: function (req, res) {
        // let promCategory = db.Category.findAll();
        
        // Promise
        // .all([promCategory])
        db.Category.findAll()
        .then((category) => {
            return res.render(path.join(__dirname,'../Views/users/registro.ejs'), {category: category})})
        .catch(error => res.send(error))
    },

    create: function (req,res) {

        const errors = validationResult(req);
    
        if (errors.isEmpty()){
        let imageName;
        if (req.file != undefined) {
                imageName = req.file.filename
        } else {
                    imageName = 'default-image.png'
        }
        
        
        // let userDb = db.User.findOne({where: {email: req.body.email},
        //     }, 
        // )

        let promUser = db.User.findOne({where:{email: req.body.email}});
        let promCategory = db.Category.findAll();
        
        Promise
        .all([promUser, promCategory])
        .then(([user,category])=>{
            if (user){
                res.render(path.join(__dirname,'../Views/users/registro.ejs'), {errors: [{msg: 'Ya existe un usuario con el email declarado'}], user, category})
            }
        })
        .catch((error)=> console.log(error))

        let userPassword = req.body.password;
        let passwordHash = bcrypt.hashSync(userPassword, 10)
        
        
        db.User.create(
            
            {
                first_name:req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                birth: req.body.nacimiento,
                password: passwordHash,
                // category_id: req.body.category,
                
            },  {
                include : ['category']
            }
        )
        .then(users => {
            res.redirect('/')
        })         
        .catch(error => res.send(error))
    }else{
        res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: errors.array(), old: req.body})
    }   
    },   

    profile: (req, res) => {
        db.User.findByPk(req.params.id,
            {
                include : ['category']
            })
            .then(user => {
                res.render(path.join(__dirname,'../Views/users/perfil.ejs'), {user: req.session.usuarioLogueado});
            });
            
    },


    edit: function(req,res) {
        let userId = req.params.id;
        let promUsers = db.User.findByPk(userId,{include: 'category'});
        let promCategory = db.Category.findAll();
        
        Promise
        .all([promUsers, promCategory])
        .then(([user, category]) => {
            //Movie.release_date = moment( new Date(Movie.release_date)).toLocaleDateString();
            // Movie.release_date = moment( new Date(Movie.release_date)).format('L');
            //new Date("Sun Jan 03 1999 21:00:00 GMT-0300 (hora estándar de Argentina)").toLocaleDateString()
            //return res.send(Movie.release_date);
            return res.render(path.join(__dirname,'../Views/users/editarUsuario.ejs'), {user, category})
        .catch(error => res.send(error))
    })
    },

    update: function (req,res) {
        let userId = req.params.id;
        let passwordHash = bcrypt.hashSync(req.body.password, 10)
        db.User
        .update(
            {
                first_name:req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                birth: req.body.nacimiento,
                password: passwordHash,
                // category_id: req.body.category,
            },
            {
                where: {id: userId}
            })
        .then((User)=> {
            return res.redirect('/')})            
        .catch(error => res.send(error))
    },

    destroy: function (req,res) {
        let userId = req.params.id;
        db.User
        .destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    },

    log: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/login.ejs'))
    },

    login:(req, res)=> {

    const errors = validationResult(req);
    let usuarioALoguearse
    if (errors.isEmpty()){
        db.User.findOne({where: {email: req.body.email}})
        .then(user =>{
         if (user != null && bcrypt.compareSync(req.body.password, user.password)){
         usuarioALoguearse = user; 
         req.session.usuarioLogueado = usuarioALoguearse
         console.log(usuarioALoguearse)
         res.redirect('/')             
        
        if(req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
            }
        if(usuarioALoguearse == null){
        res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: [{msg: 'Credenciales inválidas'}
        ]})
        }
        
        // delete usuarioALoguearse.password;
        req.session.usuarioLogueado = usuarioALoguearse
        console.log(usuariologueado)
        
    
    
    
    
    
    
        // if(req.body.remember_user) {
        //     res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
        // }
    }else{
        res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: errors.array(), old: req.body})}
        // if(usuarioALoguearse == undefined){
        //     res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: [{msg: 'Credenciales inválidas'}
        // ]})
        // }
        // // delete usuarioALoguearse.password;
        // req.session.usuarioLogueado = usuarioALoguearse;    
    
        // }else{
        // res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: errors.array(), old: req.body})

    
    
    
        // res.redirect('/')
    
    })
    .catch(function(err){console.log(err)})
    }
    },

    logout: function(req, res, file){
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },


  
    

}

module.exports = userController;
// module.exports = users;

