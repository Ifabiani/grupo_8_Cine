const express = require('express');
const path = require('path');
const db = require('../database/models')
const fs = require('fs');
const sequelize = db.sequelize;
const { Op} = require('sequelize');



const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const mainController = {
    home: (req, res) => {
        db.Movie.findAll({
            include: ['genre', 'calification', 'origin']
        })
            .then(movies => {
                res.render(path.join(__dirname,'../Views/home.ejs'), {movies})
            })
    },

}

module.exports = mainController;