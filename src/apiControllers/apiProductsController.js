const express = require('express');
const db = require('../database/models')
const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const sequelize = db.sequelize;
const { Op} = require('sequelize');

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;
const Califications = db.Calification;
const Directors = db.Director;
const Origins = db.Origin;

const apiProductController = {
    movies: (req,res) => {
        
        
        let urlProduct = "http://localhost:3031/productos/"
        let arrayProducts = [];
        let generos = {
            crimen_drama:0,
            drama : 0,
            accion_ciencia_ficcion : 0,
            drama_romance : 0,
            accion : 0,
            suspenso_drama : 0
        }
    Movies.findAll({
        raw: true
    })
    .then((e) => {
        e.forEach( product =>  arrayProducts.push(
            {
                id: product.id,
                name: product.title,
                image: '/Images/' + product.image,
                description: product.synopsis,
                relations: ['genre'],
                URL: urlProduct + product.id
            }
        ))
           
        for (let i = 0; i < e.length ; i++){
     

            if (e[i].genre_id == 1){
               generos.crimen_drama+= 1
            } else if (e[i].genre_id == 2){
                generos.drama += 1
            } else if (e[i].genre_id == 3){
                generos.accion_ciencia_ficcion += 1
            } else if (e[i].genre_id == 4){
                generos.drama_romance += 1
            } else if (e[i].genre_id == 5){
                generos.accion += 1
            } else if (e[i].genre_id == 6){
                generos.suspenso_drama += 1
            } 
    }
            let dataProducts = {
                count: e.length,
                countByCategory: generos,
                products: arrayProducts,
                
                

            }
            return res.json(dataProducts)


    }
        )
    },

    generos:(req, res) => {
    let arrayGeneros = []
    Genres.findAll()
    .then((generos) => {
        generos.forEach(genre => arrayGeneros.push({
            id:genre.id,
            name: genre.name,
        }))

        res.json(arrayGeneros)
    })
    },
    
    detail: (req, res) => {
        Movies.findByPk(req.params.id)
        .then(movie => {
            return res.json({
                id: movie.id,
                title: movie.title,
                rating: movie.rating,
                duracion: movie.length,
                genero: movie.genre_id,
                origen: movie.origin_id,
                calificacion: movie.calification_id,
                sinopsis: movie.synopsis,
                imagen: movie.image,
                relaciones: ['genres', 'calification', 'origin'],
                url_imagen: '/Images/' + movie.image,
            })
        })
    }
}

        

module.exports = apiProductController