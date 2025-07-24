document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const pass = document.getElementById("pass").value;
  const repetir = document.getElementById("passtwo").value;
  const mensaje = document.getElementById("mensaje");
  const mensajes = document.getElementById("mensajes");
  const tel = document.getElementById("tel").value.trim();
  const fecnac = document.getElementById("fechaNacimiento").value;

  mensaje.textContent = ""; // Limpia mensaje anterior

  if (nombre.length < 3) {
    mensaje.textContent = "El nombre debe tener al menos 3 caracteres.";
    return;
  }

  if (apellido.length < 3) {
    mensaje.textContent = "El apellido debe tener al menos 3 caracteres.";
    return;
  }

  if (direccion.length < 5) {
    mensaje.textContent = "La dirección debe tener al menos 5 caracteres.";
    return;
  }

  if (tel.length < 7) {
    mensaje.textContent = "El teléfono debe tener al menos 7 dígitos.";
    return;
  }

  if (!fecnac) {
    mensaje.textContent = "Debe ingresar su fecha de nacimiento.";
    return;
  }

  if (pass.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
  }

  if (pass !== repetir) {
    mensaje.textContent = "Las contraseñas no coinciden.";
    return;
  }

  mensaje.style.color = "green";
  mensaje.textContent = "Formulario enviado correctamente.";
  mensajes.innerHTML = `
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Apellido:</strong> ${apellido}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Dirección:</strong> ${direccion}</p>
  <p><strong>Teléfono:</strong> ${tel}</p>
  <p><strong>Fecha de nacimiento:</strong> ${fecnac}</p>
`;
});
