/* =========================
   TABS SYSTEM
========================= */

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // quitar activo de todos los tabs
        tabs.forEach(t => t.classList.remove("active"));

        // activar tab actual
        tab.classList.add("active");

        const target = tab.getAttribute("data-tab");

        // ocultar todos los contenidos
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // mostrar contenido correspondiente
        document.getElementById(target).classList.add("active");

    });

});

/* =========================
   SCROLL SUAVE NAVBAR
========================= */

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href").replace("#", "");

        const targetElement = document.getElementById(targetId);

        if (targetElement) {

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});

/* =========================
   ANIMACIÓN AL CARGAR
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
const waContainer = document.querySelector(".wa-container");
const waMain = document.getElementById("waMain");

waMain.addEventListener("click", () => {
    waContainer.classList.toggle("active");
});