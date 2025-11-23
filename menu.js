const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");

menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (sideMenu.classList.contains("open") && !sideMenu.contains(e.target) && e.target !== menuButton) {
        sideMenu.classList.remove("open");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const exp = document.getElementById("expanded-list");

    exp.addEventListener("click", () => {
        exp.querySelector("ul").style.display =
            exp.querySelector("ul").style.display === "block" ? "none" : "block";
    });
});