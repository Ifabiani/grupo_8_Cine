function adminMiddleware (req, res, next) {
    if (req.session.usuarioLogueado.category_id == 2){
        return res.redirect('/')
    }
    next();
    
    }
    
    module.exports = adminMiddleware