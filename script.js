// ================================
// SCROLL SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// ANIMAÇÃO DAS SEÇÕES
// ================================

const elementos = document.querySelectorAll(
    ".recurso, .prova, .plano, .enem, .dashboard"
);

const observador = new IntersectionObserver(

    function(entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("aparecer");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach(elemento => {

    observador.observe(elemento);

});


// ================================
// EFEITO NO HEADER AO ROLAR
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 20px rgba(20, 30, 50, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});