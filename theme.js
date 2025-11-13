const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.toggle("dark", currentTheme === "dark");
themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
});
