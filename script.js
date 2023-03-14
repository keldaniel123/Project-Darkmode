const toggleDarkMode = document.querySelector (".toggle-darkmode");
const toggleText = document.querySelector (".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// Enable DarkMode button
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";
    localStorage.setItem("darkMode", "enabled");
}

// Disable DarkMode button
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkMode", null);
}

// save darkMode history
if (darkMode === "enabled") {
    enableDarkMode();
}

// Add an EventListner
toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled") {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
});