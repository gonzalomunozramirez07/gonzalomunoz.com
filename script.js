const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const year = document.querySelector("[data-year]");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  root.dataset.theme = "dark";
}

function updateThemeLabel() {
  const isDark = root.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  if (nextTheme === "dark") {
    root.dataset.theme = "dark";
  } else {
    delete root.dataset.theme;
  }

  localStorage.setItem("theme", nextTheme);
  updateThemeLabel();
});

if (year) {
  year.textContent = new Date().getFullYear();
}

updateThemeLabel();
