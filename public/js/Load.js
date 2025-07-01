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
            },
            imagenPrincipal: {
                archivo: document.getElementById('fotoCentral').value,
                estilo: document.getElementById('imgPrimEstilo').value,
                tamano: document.getElementById('imgPrimSize').value,
                altura: document.getElementById('imgPrimHeight').value,
                bordes: document.getElementById('imgPrimborder').value,
                transparencia: document.getElementById('imgPrimTransparencia').value,
                desvanecido: document.getElementById('imgPrimGradient').value,
                posicion: document.getElementById('imgPrimPosicion').value,
                escalaGrises: document.getElementById('imgPrimGray').checked
            },
            anfitrion: {
                nombre: document.getElementById('anfitrion').value,
                tamano: document.getElementById('anfitrionSize').value,
                altura: document.getElementById('anfitrionHeight').value,
                fuente: document.getElementById('fontAnfitrion').value,
                color: document.getElementById('colorAnfitrion').value
            },
            evento: {
                nombre: document.getElementById('nombreEvento').value,
                tamano: document.getElementById('EventoSize').value,
                altura: document.getElementById('EventoHeight').value,
                fuente: document.getElementById('fontEvento').value,
                color: document.getElementById('colorEvento').value
            },
            titulo: {
                texto: document.getElementById('titulo').value,
                tamano: document.getElementById('TituloSize').value,
                altura: document.getElementById('TituloHeight').value,
                fuente: document.getElementById('fontTitulo').value,
                color: document.getElementById('colorTitulo').value
            },
            datos: {
                fecha: document.getElementById('fecha').value,
                fechaTamano: document.getElementById('fechaSize').value,
                fechaAltura: document.getElementById('fechaHeight').value,
                fechaFuente: document.getElementById('fechaFont').value,
                fechaColor: document.getElementById('colorFecha').value,
                hora: document.getElementById('hora').value,
                horaTamano: document.getElementById('horaSize').value,
                horaAltura: document.getElementById('horaHeight').value,
                horaFuente: document.getElementById('horaFont').value,
                horaColor: document.getElementById('colorHora').value,
                ubicacion: document.getElementById('ubicacion').value,
                ubicacionTamano: document.getElementById('ubicacionSize').value,
                ubicacionAltura: document.getElementById('ubicacionHeight').value,
                ubicacionFuente: document.getElementById('ubicacionFont').value,
                ubicacionColor: document.getElementById('colorUbicacion').value,
            },
            mensaje: {
                mensaje: document.getElementById('mensaje').value,
                mensajeTamano: document.getElementById('mensajeSize').value,
                mensajeAltura: document.getElementById('mensajeHeight').value,
                mensajeFuente: document.getElementById('mensajeFont').value,
                mensajeColor: document.getElementById('colorMensaje').value,
            },
            galeria: { 
                foto1: document.getElementById('foto1').value,
                foto2: document.getElementById('foto2').value,
                foto3: document.getElementById('foto3').value,
                foto4: document.getElementById('foto4').value,
                foto5: document.getElementById('foto5').value,
                foto6: document.getElementById('foto6').value
            }
        };
    }

    const actualizarVista = () => {
        const config = obtenerConfig();

        // Fondo
        tarjeta.style.backgroundColor = config.fondo.color;
        tarjeta.style.backgroundImage = config.fondo.imagen ? `url(${config.fondo.imagen})` : "none";
        tarjeta.style.backgroundSize = config.fondo.estilo;
        tarjeta.style.backgroundRepeat = config.fondo.RepetirBG ? "repeat" : "no-repeat";
        tarjeta.style.filter = config.fondo.escalaGrises ? "grayscale(1)" : "none";

        // Foto central
        const vistaFoto = document.getElementById("vistaFotoCentral");
        vistaFoto.style.backgroundImage = config.imagenPrincipal.archivo ? `url(${config.imagenPrincipal.archivo})` : "none";
        vistaFoto.style.backgroundSize = config.imagenPrincipal.estilo;
        vistaFoto.style.height = config.imagenPrincipal.altura+"%";
        vistaFoto.style.filter = config.imagenPrincipal.escalaGrises ? "grayscale(1)" : "none";
        vistaFoto.style.borderRadius = config.imagenPrincipal.bordes + "%";
        vistaFoto.style.opacity = 1 - config.imagenPrincipal.transparencia / 100;
        vistaFoto.style.scale = config.imagenPrincipal.tamano / 50;

        vistaFoto.style.webkitMaskImage = "linear-gradient(black 90%, transparent)";
        vistaFoto.style.maskImage = "linear-gradient(white " + (100 - config.imagenPrincipal.desvanecido) + "%, transparent)";

        vistaFoto.style.marginTop = config.imagenPrincipal.posicion + "%";

        // Textos
        document.getElementById("vistaAnfitrion").textContent = config.anfitrion.nombre;
        document.getElementById("vistaAnfitrion").style.fontSize = config.anfitrion.tamano + "px";
        document.getElementById("vistaAnfitrion").style.top = config.anfitrion.altura + "px";
        document.getElementById("vistaAnfitrion").style.color = config.anfitrion.color;
        document.getElementById("vistaAnfitrion").style.fontFamily = config.anfitrion.fuente;

        document.getElementById("vistaEvento").textContent = config.evento.nombre;
        document.getElementById("vistaEvento").style.fontSize = config.evento.tamano + "px";
        document.getElementById("vistaEvento").style.top = config.evento.altura + "px";
        document.getElementById("vistaEvento").style.color = config.evento.color;
        document.getElementById("vistaEvento").style.fontFamily = config.evento.fuente;

        document.getElementById("vistaTitulo").textContent = config.titulo.texto;
        document.getElementById("vistaTitulo").style.fontSize = config.titulo.tamano + "px";
        document.getElementById("vistaTitulo").style.top = config.titulo.altura + "px";
        document.getElementById("vistaTitulo").style.color = config.titulo.color;
        document.getElementById("vistaTitulo").style.fontFamily = config.titulo.fuente;

        document.getElementById("vistaFecha").textContent = config.datos.fecha;
        document.getElementById("vistaFecha").style.fontSize = config.datos.fechaTamano + "px";
        document.getElementById("vistaFecha").style.top = config.datos.fechaAltura + "px";
        document.getElementById("vistaFecha").style.fontFamily = config.datos.fechaFuente;
        document.getElementById("vistaFecha").style.color = config.titulo.fechaColor;

        document.getElementById("vistaHora").textContent = config.datos.hora;
        document.getElementById("vistaHora").style.fontSize = config.datos.horaTamano + "px";
        document.getElementById("vistaHora").style.top = config.datos.horaAltura + "px";
        document.getElementById("vistaHora").style.fontFamily = config.datos.horaFuente;
        document.getElementById("vistaHora").style.color = config.titulo.horaColor;

        document.getElementById("vistaUbicacion").textContent = config.datos.ubicacion;
        document.getElementById("vistaUbicacion").style.fontSize = config.datos.ubicacionTamano + "px";
        document.getElementById("vistaUbicacion").style.top = config.datos.ubicacionAltura + "px";
        document.getElementById("vistaUbicacion").style.fontFamily = config.datos.ubicacionFuente;
        document.getElementById("vistaUbicacion").style.color = config.titulo.ubicacionColor;

        document.getElementById("vistaMensaje").textContent = config.mensaje.mensaje;
        document.getElementById("vistaMensaje").style.fontSize = config.mensaje.mensajeTamano + "px";
        document.getElementById("vistaMensaje").style.top = config.mensaje.mensajeAltura + "px";
        document.getElementById("vistaMensaje").style.fontFamily = config.mensaje.mensajeFuente;
        document.getElementById("vistaMensaje").style.color = config.mensaje.mensajeColor;

        // Galería
        ["foto1", "foto2", "foto3", "foto4", "foto5", "foto6"].forEach((id, i) => {
            const gal = document.getElementById(`galeria${i + 1}`);
            gal.style.backgroundImage = config.galeria[id] ? `url(${config.galeria[id]})` : "none";
        });


        // Galeria
       document.getElementById('galeria').style.bottom = "5px"
    };



    // Escuchar todos los inputs para actualizar en tiempo real
    document.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", actualizarVista);
        input.addEventListener("change", actualizarVista);
    });

    // Botón mostrar configuración
    const Shower = document.getElementById("Exportar");
    Shower.addEventListener("click", () => {
        const config = obtenerConfig();
        console.table(config);
        console.log(JSON.stringify(config, null, 2));
    });

    actualizarVista();
});
