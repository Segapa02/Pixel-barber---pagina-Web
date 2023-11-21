function mostrarAlerta() {
    var nombres = document.getElementById("nombres").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;

    var formatoTelefonoValido = /^[0-9]+$/.test(telefono);
    var formatoCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (nombres && correo && telefono) {
        if (formatoTelefonoValido) {
            if (formatoCorreoValido) {
                alert("!Hola, tu información se registró correctamente, muy pronto nos pondremos en contacto contigo, ten excelente y pixeleado dia :)¡");
            } else {
                alert("Por favor, ingrese un correo electrónico válido.");
            }
        } else {
            alert("Por favor, ingrese un número de teléfono válido.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}


//validación de inicio de sesión












