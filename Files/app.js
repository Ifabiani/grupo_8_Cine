const express = require('express');
const app = express();
const path = require('path');

app.listen(3031, ()=>
console.log("Server start at port 3031"));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "Views/home.html"))
});

app.use(express.static(path.resolve(__dirname,'./Public')));



