const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main')
const productRouter = require ('./routes/productsRoutes')
const usersRouter = require ('./routes/usersRoutes')
const methodOverride =  require('method-override');

app.listen(3031, ()=>
console.log("http://localhost:3031"));


app.use('/', mainRouter)
app.use('/productos', productRouter)
app.use('/', usersRouter)
app.use(express.static(path.resolve(__dirname,'./Public')));
app.use(methodOverride('_method'));
app.set('view engine','ejs');



