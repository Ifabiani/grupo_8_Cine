const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../Data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const {validationResult} = require('express-validator');

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
        let newUser = {
                id: users[users.length - 1].id + 1,
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                imagen: imageName
        };
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/usuarios/registro');
    }else{
        res.render((path.join(__dirname,'../Views/users/registro.ejs')), {errors: errors.array()})                    
    }
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
		res.redirect('/usuarios/registro');
    },

    eliminar: (req, res) => {
		let id = req.params.id;
		let finalUsers = users.filter(user => user.id != id);

		fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
		res.redirect('/usuarios/registro');
	},

    login: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/login.ejs'))
    },

    logeo:(req, res)=> {

    // const errors = validationResult(req);

    // if (errors.isEmpty()){
    // res.redirect('/usuarios/registro')
    // }else{
    //     res.render((path.join(__dirname,'../Views/users/login.ejs')), {errors: errors.array()})

    // }}

    console.log(req.body)
    }

}

module.exports = userController