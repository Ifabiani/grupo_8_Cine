const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../Data/users.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 

function usuarioLogeadoMiddleware (req,res, next) {
   
    

    res.locals.isLogged = false;
    // let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = user.findByField('email', emailInCookie);

    // if (userFromCookie) {
	// 	req.session.userLogged = userFromCookie;
	// }
    
    if(req.session.usuarioLogueado){
        res.locals.isLogged = true
        req.app.locals.usuarioLogueado = req.session.usuarioLogueado
        // console.log(locals.usuarioLogueado)
    }


    next()

}



module.exports = usuarioLogeadoMiddleware;