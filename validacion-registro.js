const nombres = document.getElementById("nombres");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const password = document.getElementById("password");

function validarDatos() {
  // Validar que los nombres no estén vacíos
  if (nombres.value === "") {
    alert("Los nombres no pueden estar vacíos");
    return false;
  }

  // Validar que el teléfono tenga 10 dígitos
  if (telefono.value.length !== 10) {
    alert("El teléfono debe tener 10 dígitos");
    return false;
  }

  // Validar que el correo sea válido
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!regex.test(correo.value)) {
    alert("El correo no es válido");
    return false;
  }

  // Validar que la contraseña tenga más de 8 dígitos
  if (password.value.length < 8) {
    alert("La contraseña debe tener más de 8 dígitos");
    return false;
  }

  // Si todos los datos son válidos, se envía el formulario y se muestra un mensaje de registro exitoso
  if (nombres.value !== "" && telefono.value.length === 10 && regex.test(correo.value) && password.value.length >= 8) {
    alert("Registro exitoso");
    return true;
  }

  // Si algún campo está vacío, se muestra un mensaje de que faltan campos por llenar
  alert("Faltan campos por llenar");
  return false;
}
