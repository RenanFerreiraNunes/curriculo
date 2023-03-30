window.addEventListener('load', () => {
    const toggle = document.getElementById("toggleTheme"), T = document.getElementById("toggle")

    const handleToggle = () => {
        T.classList.toggle("dark")
        toggle.textContent = T.classList.contains("dark") ? "Light Theme" : "Dark Theme";
    }

    toggle.addEventListener('click', handleToggle)
})