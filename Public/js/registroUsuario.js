
window.addEventListener("load", function() {



const formulario = document.querySelector("#form-registro")




formulario.addEventListener("submit", function(event) {
const errores = [];
const campoNombre = document.querySelector("input.nombre")
const campoApellido = document.querySelector("input#apellido");
const campoPassword = document.querySelector("input#password");
const campoEmail = document.querySelector("input#email")
const campoImagen = document.querySelector("input#imagen");







if(campoNombre.value == ""){
    errores.push("El campo nombre no puede estar vacío")
}else if(campoNombre.value.length < 2){
    errores.push("El campo nombre debe contener al menos 2 caracteres")
}

if(campoApellido.value == ""){
    errores.push("El campo apellido no puede estar vacío")
}else if(campoApellido.value.length < 2){
    errores.push("El campo apellido debe contener al menos 2 caracteres")
}

if(campoPassword.value == ""){
    errores.push("El campo contraseña no puede estar vacío")
}else if(campoPassword.value.length < 8){
    errores.push("El campo contraseña debe contener al menos 8 caracteres")
}
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
if(campoEmail.value ==""){
    errores.push("El campo email no puede estar vacío")
}else if(!emailRegex.test(campoEmail.value)){
    errores.push("El campo email debe contener un formato válido")
}

if(campoImagen.value == ""){
    errores.push("Debe seleccionar al menos una imagen")
}
let extensiones_permitidas = ['.jpg', '.jpeg' , '.png' , '.gif'];
let extension = (campoImagen.value.substring(campoImagen.value.lastIndexOf("."))).toLowerCase();
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