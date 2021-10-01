const express = require('express');

const mainController = {
    home: (req, res) => {
        res.render("home")
    },

    detallePelicula: (req, res) => {
        res.render("detallePelicula")
    },

    carrito: (req, res) => {
            res.render("carrito")
    },

    login: (req, res) => {
        res.render("login")
    },

    registro: (req, res) => {
        res.render("registro")},

}

module.exports = mainController;