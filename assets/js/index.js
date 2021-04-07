window.onload = () => {
    document.body.style.transition = "background 500ms";
};

document.querySelector("#theme-toggle-button")
    .addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });