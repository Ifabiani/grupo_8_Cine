const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main')

app.listen(3031, ()=>
console.log("http://localhost:3031"));

app.set('view engine','ejs');

app.use('/', mainRouter)

app.use(express.static(path.resolve(__dirname,'./Public')));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "Views/home.html"))
// });
// app.get('/carrito1', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "Views/carrito1.html"))
// });

// app.get('/detalle', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "Views/detalle-de-producto.html"))
// });

// app.get('/registro', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "Views/registro.html")) 
// });

// app.get('/ingresar', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, "Views/ingresar.html"))
// });




