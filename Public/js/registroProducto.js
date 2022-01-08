window.addEventListener("load", function() {



    const formulario = document.querySelector("#form-registro")
    
  
    formulario.addEventListener("submit", function(event) {
    const errores = [];
    const campoNombre = document.querySelector("input#nombre")
    const campoSinopsis = document.querySelector("input#sinopsis");
    const campoImagen = document.querySelector("input#imagen")
    
    
    
    
    
    
    if(campoNombre.value == ""){
        errores.push("El campo nombre no puede estar vacío")
    }else if(campoNombre.value.length < 5){
        errores.push("El campo nombre debe contener al menos 5 caracteres")
    }
    
    if(campoSinopsis.value ==""){
        errores.push("El campo sinopsis no puede estar vacío")
    }else if(campoSinopsis.value.length < 20){
        errores.push("El campo sinopsis debe contener al menos 20 caracteres")
    }

    if(campoImagen.value == ""){
        errores.push("Debe seleccionar al menos una imagen")
    }
    let extensiones_permitidas = ['.jpg', '.jpeg' , '.png' , '.gif'];
    let extension = (campoImagen.value.substring(campoImagen.value.lastIndexOf("."))).toLowerCase();
    console.log(extension)
    console.log(campoImagen.filename)
    permitida = false;
    for (var i = 0; i < extensiones_permitidas.length; i++) {
        if (extensiones_permitidas[i] == extension) {
        permitida = true;
        break;
        }
        }
        if (!permitida) {
            errores.push("Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extensiones: " + extensiones_permitidas.join())
          }
    
     if (errores.length > 0){
         event.preventDefault();
         let ulErrores = document.querySelector("div.errores ul");
         errores.forEach (error =>{
             ulErrores.innerHTML += `<li>${error}</li>`
             
         })
        
     }  
     
    })  
    }
    )