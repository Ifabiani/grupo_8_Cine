function adminMiddleware (req, res, next) {
    if (req.session.usuarioLogueado.categoria === 'Usuario'){
        return res.redirect('/')
    }
    next();
    
    }
    
    module.exports = adminMiddleware