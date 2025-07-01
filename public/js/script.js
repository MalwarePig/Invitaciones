document.addEventListener("DOMContentLoaded", () => {
    const tarjeta = document.getElementById("tarjeta");

    function obtenerConfig() {
        return {
            fondo: {
                color: document.getElementById("colorFondo").value,
                imagen: document.getElementById('imagenFondo').value,
                estilo: document.getElementById('bgEstilo').value,
                RepetirBG: document.getElementById('RepetirBG').checked,
                escalaGrises: document.getElementById('bgGray').checked,
                bordes: document.getElementById('bgSize').value, 
            },
            imagenPrincipal: {
                archivo: document.getElementById('fotoCentral').value,
                estilo: document.getElementById('imgPrimEstilo').value,
                tamano: document.getElementById('imgPrimSize').value,
                bordes: document.getElementById('imgPrimborder').value,
                desvanecido: document.getElementById('imgPrimGradient').value,
                escalaGrises: document.getElementById('imgPrimGray').checked
            },
            titulo: {
                texto: document.getElementById('titulo').value,
                tamano: document.getElementById('TituloSize').value,
                altura: document.getElementById('TituloHeight').value,
                fuente: document.getElementById('fontTitulo').value
            },
            evento: {
                nombre: document.getElementById('nombreEvento').value,
                tamano: document.getElementById('EventoSize').value,
                altura: document.getElementById('EventoHeight').value,
                fuente: document.getElementById('fontEvento').value
            },
            anfitrion: {
                nombre: document.getElementById('anfitrion').value,
                tamano: document.getElementById('anfitrionSize').value,
                altura: document.getElementById('anfitrionHeight').value,
                fuente: document.getElementById('fontAnfitrion').value
            },
            datos: {
                fecha: document.getElementById('fecha').value,
                fechaTamano: document.getElementById('fechaSize').value,
                fechaAltura: document.getElementById('fechaHeight').value,
                fechaFuente: document.getElementById('fechaFont').value,
                hora: document.getElementById('hora').value,
                horaTamano: document.getElementById('horaSize').value,
                horaAltura: document.getElementById('horaHeight').value,
                horaFuente: document.getElementById('horaFont').value,
                ubicacion: document.getElementById('ubicacion').value,
                ubicacionTamano: document.getElementById('ubicacionSize').value,
                ubicacionAltura: document.getElementById('ubicacionHeight').value,
                ubicacionFuente: document.getElementById('ubicacionFont').value
            },
            mensaje: document.getElementById('mensaje').value,
            galeria: {
                foto1: document.getElementById('foto1').value,
                foto2: document.getElementById('foto2').value,
                foto3: document.getElementById('foto3').value,
                foto4: document.getElementById('foto4').value
            }
        };
    }

    const actualizarVista = () => {
        const config = obtenerConfig();

        // Fondo
        tarjeta.style.backgroundColor = config.fondo.color;
        tarjeta.style.backgroundImage = config.fondo.imagen ? `url(${config.fondo.imagen})` : "none";
        tarjeta.style.backgroundSize = config.fondo.estilo;
        tarjeta.style.backgroundRepeat = config.fondo.RepetirBG ? "repeat" : "none";
        tarjeta.style.filter = config.fondo.escalaGrises ? "grayscale(1)" : "none";

        // Foto central
        const vistaFoto = document.getElementById("vistaFotoCentral");
        vistaFoto.style.backgroundImage = config.imagenPrincipal.archivo ? `url(${config.imagenPrincipal.archivo})` : "none";
        vistaFoto.style.backgroundSize = config.imagenPrincipal.estilo;
        vistaFoto.style.filter = config.imagenPrincipal.escalaGrises ? "grayscale(1)" : "none";
        vistaFoto.style.borderRadius = config.imagenPrincipal.bordes + "%";
        vistaFoto.style.opacity = 1 - config.imagenPrincipal.desvanecido / 100;
        vistaFoto.style.scale = config.imagenPrincipal.tamano / 50;

        // Textos
        document.getElementById("vistaTitulo").textContent = config.titulo.texto;
        document.getElementById("vistaTitulo").style.fontSize = config.titulo.tamano + "px";
        document.getElementById("vistaTitulo").style.lineHeight = config.titulo.altura + "px";

        document.getElementById("vistaEvento").textContent = config.evento.nombre;
        document.getElementById("vistaEvento").style.fontSize = config.evento.tamano + "px";
        document.getElementById("vistaEvento").style.lineHeight = config.evento.altura + "px";

        document.getElementById("vistaAnfitrion").textContent = config.anfitrion.nombre;
        document.getElementById("vistaAnfitrion").style.fontSize = config.anfitrion.tamano + "px";
        document.getElementById("vistaAnfitrion").style.lineHeight = config.anfitrion.altura + "px";

        document.getElementById("vistaMensaje").textContent = config.mensaje;

        document.getElementById("vistaFecha").textContent = config.datos.fecha;
        document.getElementById("vistaFecha").style.fontSize = config.datos.fechaTamano + "px";
        document.getElementById("vistaFecha").style.lineHeight = config.datos.fechaAltura + "px";

        document.getElementById("vistaHora").textContent = config.datos.hora;
        document.getElementById("vistaHora").style.fontSize = config.datos.horaTamano + "px";
        document.getElementById("vistaHora").style.lineHeight = config.datos.horaAltura + "px";

        document.getElementById("vistaUbicacion").textContent = config.datos.ubicacion;
        document.getElementById("vistaUbicacion").style.fontSize = config.datos.ubicacionTamano + "px";
        document.getElementById("vistaUbicacion").style.lineHeight = config.datos.ubicacionAltura + "px";

        // Galería
        ["foto1", "foto2", "foto3", "foto4"].forEach((id, i) => {
            const gal = document.getElementById(`galeria${i + 1}`);
            gal.style.backgroundImage = config.galeria[id] ? `url(${config.galeria[id]})` : "none";
        });
    };

    // Escuchar todos los inputs para actualizar en tiempo real
    document.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", actualizarVista);
        input.addEventListener("change", actualizarVista);
    });

    // Botón mostrar configuración
    const Shower = document.getElementById("Shower");
    Shower.addEventListener("click", () => {
        const config = obtenerConfig();
        console.table(config);
        console.log(JSON.stringify(config, null, 2));
    });

    actualizarVista();
});
