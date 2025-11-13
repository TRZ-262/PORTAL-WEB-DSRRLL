let isLogin = true;

document.getElementById("toggle").addEventListener("click", () => {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Iniciar Sesión" : "Crear Cuenta";
  document.getElementById("auth-btn").innerText = isLogin ? "Entrar" : "Registrarme";
  document.getElementById("toggle").innerHTML = isLogin
    ? "¿No tienes cuenta? <span>Regístrate</span>"
    : "¿Ya tienes cuenta? <span>Inicia sesión</span>";
});

document.getElementById("auth-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Completa todos los campos");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (isLogin) {
    if (users[username] && users[username].password === password) {
      localStorage.setItem("loggedUser", username);
      window.location.href = "perfil.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } else {
    if (users[username]) {
      alert("El usuario ya existe");
    } else {
      users[username] = {
        password,
        nombre: username,
        profesion: "Desarrollador Web",
        habilidades: ["HTML", "CSS", "JavaScript"],
        ubicacion: "Remoto"
      };
      localStorage.setItem("users", JSON.stringify(users));
      alert("Cuenta creada con éxito, ahora puedes iniciar sesión.");
      isLogin = true;
      document.getElementById("form-title").innerText = "Iniciar Sesión";
      document.getElementById("auth-btn").innerText = "Entrar";
    }
  }
});
