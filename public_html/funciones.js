//PARA QUE FUNCIONE SE NECESITA HTTP... ES DECIR UTILIZARLO EN UN SERVIDOR... COMO FILE:// no funciona

window.onload=generar;
function generar(){
    var boton=document.getElementById("contrasenia");
    boton.addEventListener("click",generarContrasenia);
    //Cuando se carga la web.. Generamos el contador si no existe y si existe y lo suma
    var valor=localStorage.getItem("contador");
    if (valor==null){
        localStorage.setItem("contador",1);
    }else{
        valor=parseInt(valor);
        valor=valor+1;
        localStorage.setItem("contador",valor);
        
    }
    alert("Contador: "+valor);
    //localStorage.removeItem("contador");
}

//Funcion que va generando contraseñas... Se va llamando asi misma durante un intervalo de tiempo
function generarContrasenia(){
        

        var contrasenia=Contrasenia();
        localStorage.setItem("contrasenia",contrasenia);
        setInterval(generarContrasenia, 60000);
}

//Metodo que genera una contraseña aleatorio
function Contrasenia(){
    //alert("dentro");
     var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        var contraseña = "";
    for (i=0; i<5; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    //CrearCookieTiempo("contrasenia",contraseña,"60","/");
    alert("Contraseña generada");
    return contraseña;
}




