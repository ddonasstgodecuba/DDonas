/* =========================
   VARIABLES GLOBALES
========================= */

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const links = document.querySelectorAll(".navbar a");

const waContainer = document.querySelector(".wa-container");
const waMain = document.getElementById("waMain");

const toggle = document.getElementById("darkToggle");

/* =========================
   ESTADO INICIAL (ANIMACIÓN)
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
    document.body.style.transition = "background .6s ease, color .6s ease, opacity .6s ease";

});

/* =========================
   MODO OSCURO (ROBUSTO + PERSISTENTE)
========================= */

if (toggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            toggle.checked ? "dark" : "light"
        );

    });

}

/* =========================
   TABS SYSTEM (PROTEGIDO)
========================= */

if (tabs.length && contents.length) {

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const target = tab.getAttribute("data-tab");

            contents.forEach(content => {
                content.classList.remove("active");
            });

            const targetEl = document.getElementById(target);
            if (targetEl) targetEl.classList.add("active");

        });

    });

}

/* =========================
   SCROLL SUAVE NAVBAR
========================= */

if (links.length) {

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

}

/* =========================
   WHATSAPP FLOAT MENU
========================= */

if (waMain && waContainer) {

    waMain.addEventListener("click", () => {
        waContainer.classList.toggle("active");
    });

}