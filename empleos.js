const userLogged = localStorage.getItem("loggedUser");
if (!userLogged) window.location.href = "index.html";

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
});

const empleos = [
  { titulo: "Frontend Developer", empresa: "TechCorp", tecnologias: ["React", "CSS", "JavaScript"] },
  { titulo: "Backend Developer", empresa: "Cloudify", tecnologias: ["Node.js", "MongoDB", "API REST"] },
  { titulo: "Full Stack Developer", empresa: "StartUpX", tecnologias: ["React", "Node.js", "PostgreSQL"] },
  { titulo: "UI/UX Designer", empresa: "DesignPro", tecnologias: ["Figma", "Adobe XD"] }
];

const jobList = document.getElementById("job-list");

function mostrarEmpleos(lista) {
  jobList.innerHTML = "";
  lista.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job");
    div.innerHTML = `
      <h3>${job.titulo}</h3>
      <p><strong>Empresa:</strong> ${job.empresa}</p>
      <p><strong>Tecnologías:</strong> ${job.tecnologias.join(", ")}</p>
    `;
    jobList.appendChild(div);
  });
}

mostrarEmpleos(empleos);

document.getElementById("search").addEventListener("input", e => {
  const valor = e.target.value.toLowerCase();
  const filtrados = empleos.filter(job =>
    job.titulo.toLowerCase().includes(valor) ||
    job.tecnologias.join(" ").toLowerCase().includes(valor)
  );
  mostrarEmpleos(filtrados);
});
