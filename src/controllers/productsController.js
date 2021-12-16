const express = require('express');
const db = require('../database/models')
const path = require('path');
const fs = require('fs');
const sequelize = db.sequelize;
const { Op} = require('sequelize');


const Movies = db.Movies;
const Genres = db.Genre;
const Actors = db.Actor;
const Califications = db.Calification;
const Directors = db.Director;
const Origins = db.Origin;




const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productController = {


    //-------------CRUD con JSON ---------------------------------------


    // //Controlador que muestra todos los productos (GET)
    // productos: (req, res) => {
    //     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
    //     res.render(path.join(__dirname,'../Views/products/productos.ejs'), {products : products})
    // },

    // //Controlador de la ruta que trae el formulario para crear productos (GET)
    // crear: (req, res) => {
    //     res.render(path.join(__dirname,'../Views/products/crearProducto.ejs'))},


    //  //Ruta /productos/:id que muestra el detalle de una pelicula seleccionada (GET)
    //  detallePelicula: (req, res) => {
    //     let id = req.params.id
	// 	let product = products.find(product => product.id == id)

    //     res.render(path.join(__dirname,'../Views/products/detallePelicula.ejs'), {product : product})
    // },
    

    // //Controlador que crea un nuevo producto(PUT)
    // store: (req, res) => {
    //     let imageName;
    //     if (req.file != undefined) {
    //         imageName = req.file.filename
    //     } else {
    //         imageName = 'default-image.png'
    //     }
    //     let newProduct = {
    //         id: products[products.length - 1].id + 1,
    //         ...req.body,
    //         imagen: imageName
    //     };
        
    //     products.push(newProduct)
    //     fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    //     res.redirect('/productos');
            
    //     },
    // //Controlador de la ruta que trae el formulario para editar un producto (GET)
    // editar: (req, res) => {
    //     let id = req.params.id
	// 	let productToEdit = products.find(
	// 		product => product.id == id
	// 	)

	// 	res.render(path.join(__dirname,'../Views/products/editarProducto.ejs'), {productToEdit})
    //     },

    // //Controlador que edita un producto existente (PATH)

    // editar: (req, res) => {
    //     let id = req.params.id;
	// 	let productToEdit = products.find(product => product.id == id)

	// 	let imageName;
    //     if (req.file != undefined) {
    //         imageName = req.file.filename
    //     } else {
    //         imageName = 'default-image.png'
    //     }
        
	// 	productToEdit = {
	// 		id: productToEdit.id,
    //         // imagen: productToEdit.imagen,
    //         imagen:imageName,
	// 		...req.body,
			
	// 	};
    //     // console.log(productToEdit);
		
	// 	let newProducts = products.map(product => {
	// 		if (product.id == productToEdit.id) {
	// 			return product = {...productToEdit};
	// 		}
	// 		return product;
	// 	})

	// 	fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
	// 	res.redirect('/productos');
	// },

    // eliminar: (req, res) => {
	// 	let id = req.params.id;
	// 	let finalProducts = products.filter(product => product.id != id);

	// 	fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
	// 	res.redirect('/productos');
	// },
   
    // carrito: (req, res) => {
    //     let id = req.params.id
	// 	let product = products.find(product => product.id == id)

    //     res.render(path.join(__dirname,'../Views/products/carrito.ejs'), {product : product})
    // },

    //-------------CRUD con SQL ---------------------------------------

    movies: (req, res) => {
        db.Movie.findAll({
            include: ['genre', 'calification', 'origin']
        })
            .then(movie => {
                res.render(path.join(__dirname,'../Views/products/productos.ejs'), {movie})
            })
    },

    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        let promDirectors = Directors.findAll();
        let promOrigin = Origins.findAll();
        let promCalifications = Califications.findAll();
        
        Promise
        .all([promGenres, promActors, promDirectors, promOrigin, promCalifications])
        .then(([allGenres, allActors, allDirectors, allOrigins, allCalifications]) => {
            return res.render(path.join(__dirname,'../Views/products/crearProducto.ejs'), {allGenres, allActors, allDirectors, allOrigins, allCalifications})})
        .catch(error => res.send(error))
    },

    // Movie.findByPk(mmovie.id).then(movie => {
    //     // tu código aquí
    //     movie.setActors(req.body.actor)
    // });

    create: function (req,res) {
        let newProductImage = "default-image.png";
        if (req.file != undefined) {newProductImage = req.file.filename; }
        db.Movie.create(
            
            {
                title: req.body.name,
                origin_id: req.body.origin,
                genre_id: req.body.genero,
                director: req.body.director,
                actor: req.body.actor,
                calification_id: req.body.calification,
                length: req.body.length,
                rating: req.body.rating,
                synopsis: req.body.sinopsis,
                release_date: req.body.release_date,
                image: newProductImage
            }
        )
        .then((movie)=> {
            // console.log(movie)
            db.Movie.findByPk(movie.id).then(movie => {
                //     // tu código aquí
                    movie.setActors(req.body.actor)
                    movie.setDirectors(req.body.director)
                })
            return res.redirect('/')})            
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre', 'origin', 'calification', 'actors', 'directors']
            })
            .then(movie => {
                res.render(path.join(__dirname,'../Views/products/detallePelicula.ejs'), {movie});
            });
            
    },


    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = db.Movie.findByPk(movieId,{include: ['genre', 'origin', 'calification', 'actors', 'directors']});
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        let promDirectors = Directors.findAll();
        let promOrigins = Origins.findAll();
        let promCalifications = Califications.findAll();
        Promise
        .all([promMovies, promGenres, promActors, promDirectors, promOrigins, promCalifications])
        .then(([movie, genres, actors, directors, origins, califications]) => {
            //Movie.release_date = moment( new Date(Movie.release_date)).toLocaleDateString();
            // Movie.release_date = moment( new Date(Movie.release_date)).format('L');
            //new Date("Sun Jan 03 1999 21:00:00 GMT-0300 (hora estándar de Argentina)").toLocaleDateString()
            //return res.send(Movie.release_date);
            return res.render(path.join(__dirname,'../Views/products/editarProducto.ejs'), {movie, genres, actors, directors, origins, califications})
        .catch(error => res.send(error))
    })
    },

    update: function (req,res) {
        let movieId = req.params.id;
        let newProductImage = "default-image.png";
        if (req.file != undefined) {newProductImage = req.file.filename; }
        db.Movie
        .update(
            {
                title: req.body.name,
                origin_id: req.body.origin,
                genre_id: req.body.genre,
                // director: req.body.director,
                // actor: req.body.actors,
                calification_id: req.body.calification,
                length: req.body.length,
                rating: req.body.rating,
                synopsis: req.body.sinopsis,
                release_date: req.body.release_date,
                image: newProductImage
            },
            {
                where: {id: movieId}
            })
        // .then((movie)=>{
        //     db.Actor_movie.destroy({where: {movie_id: movie.id}})
        // })
        .then((movie)=> {
            db.Movie.findByPk(movie.id)
            .then(movie => {
                    movie.setActors(req.body.actor)
                    movie.setDirectors(req.body.director)
                })
            return res.redirect('/')})            
        .catch(error => res.send(error))
    },

    destroy: function (req,res) {
        let movieId = req.params.id;
        db.Movie
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    },

    cart: (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre', 'origin', 'calification', 'actors', 'directors']
            })
            .then(movie => {
                res.render(path.join(__dirname,'../Views/products/carrito.ejs'), {movie});
            });
            
    },
    
}

module.exports = productController;


