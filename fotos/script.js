document.addEventListener("DOMContentLoaded", function () {

    console.log("JUNIETH ❤️ Página cargada");

    /* ===========================
       MUSICA
    =========================== */

    const botonMusica = document.getElementById("playMusic");
    const musica = document.getElementById("musica");

    let reproduciendo = false;

    if (botonMusica && musica) {

        botonMusica.addEventListener("click", function () {

            if (!reproduciendo) {

                musica.play();

                reproduciendo = true;

                botonMusica.innerHTML =
                    '<i class="fas fa-pause"></i> Música Activa';

            } else {

                musica.pause();

                reproduciendo = false;

                botonMusica.innerHTML =
                    '<i class="fas fa-play"></i> Iniciar Experiencia';
            }

        });

    }

    /* ===========================
       CARTA
    =========================== */

    const abrirCarta = document.getElementById("abrirCarta");
    const contenidoCarta = document.getElementById("contenidoCarta");

    if (abrirCarta && contenidoCarta) {

        abrirCarta.addEventListener("click", function () {

            if (contenidoCarta.style.display === "block") {

                contenidoCarta.style.display = "none";
                abrirCarta.innerHTML = "💌 Abrir Carta";

            } else {

                contenidoCarta.style.display = "block";
                abrirCarta.innerHTML = "❤️ Cerrar Carta";

            }

        });

    }

    /* ===========================
       MODAL IMAGENES
    =========================== */

    const imagenes = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("modalImagen");
    const imagenExpandida = document.getElementById("imagenExpandida");
    const cerrar = document.querySelector(".cerrar");

    if (modal && imagenExpandida && cerrar) {

        imagenes.forEach(img => {

            img.addEventListener("click", function () {

                modal.style.display = "block";
                imagenExpandida.src = this.src;

            });

        });

        cerrar.addEventListener("click", function () {

            modal.style.display = "none";

        });

    }
    

    /* ===========================
       PARTICULAS
    =========================== */

    if (typeof particlesJS !== "undefined") {

        particlesJS("particles-js", {

            particles: {

                number: {
                    value: 80
                },

                color: {
                    value: "#00bfff"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.5
                },

                size: {
                    value: 3
                },

                move: {
                    enable: true,
                    speed: 2
                }

            }

        });

    }

        /* ===========================
       INICIALIZAR AOS (ANIMACIONES)
    =========================== */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000, // Duración de la animación en milisegundos
            once: true      // La animación ocurre solo una vez al bajar
        });
    }


});

