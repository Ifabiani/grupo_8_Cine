const express = require('express');
const path = require('path');

const userController = {

    login: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/login.ejs'))
    },

    registro: (req, res) => {
        res.render(path.join(__dirname,'../Views/users/registro.ejs'))},


}

module.exports = userController