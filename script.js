document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // Check if a theme is saved in localStorage
    const savedTheme = localStorage.getItem("theme");

    // If a theme is saved, apply it
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateThemeIcon(savedTheme);
    }
});

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    body.classList.toggle("dark-mode");

    // Save the theme preference to localStorage
    const theme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    localStorage.setItem("theme", theme);

    // Update the theme icon
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById("theme-icon");

    // Update the background image based on the current theme
    themeIcon.style.backgroundImage = theme === "dark-mode" ? "url('sun.png')" : "url('moon.png')";
}
