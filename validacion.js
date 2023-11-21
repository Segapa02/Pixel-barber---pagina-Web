function validarCorreo() {
    
    var correo = document.getElementById("email").value;
    var contrasena = document.getElementById("password").value;

    if (correo === "sebas@admin.com" && contrasena === "0000") {
       
        alert("Inicio de sesión exitoso");
        
    } else {
        
        alert("Correo o contraseña incorrectos");
    }
}