const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../Data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productController = {
    //Controlador que muestra todos los productos (GET)
    productos: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render(path.join(__dirname,'../Views/products/productos.ejs'), {products : products})
    },

    //Controlador de la ruta que trae el formulario para crear productos (GET)
    crear: (req, res) => {
        res.render(path.join(__dirname,'../Views/products/crearProducto.ejs'))},


     //Ruta /productos/:id que muestra el detalle de una pelicula seleccionada (GET)
     detallePelicula: (req, res) => {
        let id = req.params.id
		let product = products.find(product => product.id == id)

        res.render(path.join(__dirname,'../Views/products/detallePelicula.ejs'), {product : product})
    },
    

    //Controlador que crea un nuevo producto(PUT)
    store: (req, res) => {
        let imageName;
        if (req.file != undefined) {
            imageName = req.file.filename
        } else {
            imageName = 'default-image.png'
        }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            imagen: imageName
        };
        
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/productos');
            
        },
    //Controlador de la ruta que trae el formulario para editar un producto (GET)
    editar: (req, res) => {
        let id = req.params.id
		let productToEdit = products.find(
			product => product.id == id
		)

		res.render(path.join(__dirname,'../Views/products/editarProducto.ejs'), {productToEdit})
        },

    //Controlador que edita un producto existente (PATH)

    update: (req, res) => {
        let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		let imageName;
        if (req.file != undefined) {
            imageName = req.file.filename
        } else {
            imageName = 'default-image.png'
        }
        
		productToEdit = {
			id: productToEdit.id,
            // imagen: productToEdit.imagen,
            imagen:imageName,
			...req.body,
			
		};
        // console.log(productToEdit);
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/productos');
	},

    eliminar: (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/productos');
	},
   
    carrito: (req, res) => {
        res.render(path.join(__dirname,'../Views/products/carrito.ejs'), {products:products})
    },

    
}

module.exports = productController;
