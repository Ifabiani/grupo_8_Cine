function usuarioLogeadoMiddleware (req,res, next) {
   
        res.locals.isLogged = false;
    if(req.session.usuarioLogueado){
        res.locals.isLogged = true
        req.app.locals.usuarioLogueado = req.session.usuarioLogueado
        // console.log(locals.usuarioLogueado)
    }


    next()

}



module.exports = usuarioLogeadoMiddleware