console.log("🟢 Connected!");

const formulario = document.querySelector("#formulario");
const terminos = document.querySelector("#terminos");
const correo = document.querySelector("#correo");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!terminos.checked || !correo.value) {
    alert("Parece que nos faltó algo...");
  } else {
    alert("¡Felicitaciones! Pronto escucharás de nosotros");
    formulario.reset();
  }
});
