window.addEventListener("load", function() {



    const formulario = document.querySelector("#form-login")
    
    
    
    
    formulario.addEventListener("submit", function(event) {
    const errores = [];
    const campoPassword = document.querySelector("input#password");
    const campoEmail = document.querySelector("input#email")
   
    
    if(campoPassword.value == ""){
        errores.push("El campo contraseña no puede estar vacío")
    }
    
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(campoEmail.value ==""){
        errores.push("El campo email no puede estar vacío")
    }else if(!emailRegex.test(campoEmail.value)){
        errores.push("El campo email debe contener un formato válido")
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