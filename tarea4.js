
const resultado = document.querySelector("#demo");
const respuestaInput = document.querySelector("#respuesta");
const botonVerificar = document.querySelector("#verificar");

botonVerificar.addEventListener("click", () => {
  const respuesta = respuestaInput.value.trim().toLowerCase();

  if (respuesta === "hola") {
    resultado.textContent = "Verdadero: escribiste hola.";
    resultado.className = "exito";
  } else if (respuesta === "chao") {
    resultado.textContent = "Falso: escribiste chao.";
    resultado.className = "error";
  } else {
    resultado.textContent = "Escribe hola o chao.";
    resultado.className = "error";
  }
});
