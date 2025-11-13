const user = localStorage.getItem("loggedUser");
if (!user) window.location.href = "index.html";

const users = JSON.parse(localStorage.getItem("users"));
const data = users[user];

document.getElementById("nombre").textContent = data.nombre;
document.getElementById("profesion").textContent = data.profesion;
document.getElementById("habilidades").textContent = data.habilidades.join(", ");
document.getElementById("ubicacion").textContent = data.ubicacion;

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
});
