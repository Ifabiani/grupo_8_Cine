const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const mainController = {
    home: (req, res) => {
        res.render(path.join(__dirname,'../Views/home.ejs'), {products:products})
    },

    

    

    

}

module.exports = mainController;