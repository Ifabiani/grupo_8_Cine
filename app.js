const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/main')
const productRouter = require ('./src/routes/productsRoutes')
const usersRouter = require ('.//src/routes/usersRoutes')
const methodOverride =  require('method-override');
const session = require('express-session')


app.use(express.static(path.resolve(__dirname,'./Public')));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({secret:'Es un secreto'}))
app.use('/', mainRouter)
app.use('/productos', productRouter)
app.use('/usuarios', usersRouter)

app.listen(3031, ()=>
console.log("http://localhost:3031"));


