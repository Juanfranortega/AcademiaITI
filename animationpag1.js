document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0,
        mouseY = 0;
    let isMoving = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isMoving) {
            isMoving = true;
            requestAnimationFrame(updateCursor);
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .carousel-controls label, .menu-nav-link, .container .box, .container2 .box, .materia, .cert, .burger-menu, .video-player-container video, .video-player-container video::-webkit-media-controls, .video-player-container video::-webkit-media-controls-play-button, .video-player-container video::-webkit-media-controls-timeline, info__icon, info, info__social-link, info__icon');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    const textInputElements = document.querySelectorAll('input, textarea');
    textInputElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('text-zone');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-zone');
        });
    });

    function updateCursor() {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + window.scrollY + 'px';
        cursor.style.opacity = 1;
        isMoving = false;
    }
});


window.addEventListener('scroll', function() {
    const heroNav = document.getElementById('heroNav'); // Obtiene el elemento de navegación principal
    const heroBackground = heroNav.querySelector('.hero-background'); // Obtiene la imagen de fondo dentro del elemento de navegación
    const scrollPosition = window.scrollY; // Obtiene la posición de desplazamiento vertical

    const opacity = 1 - (scrollPosition / 200); // Calcula la opacidad basada en la posición de desplazamiento
    heroBackground.style.opacity = opacity; // Aplica la opacidad calculada a la imagen de fondo

    if (scrollPosition > 50) {
        heroNav.classList.add('fixed'); // Añade la clase 'fixed' si se ha desplazado más de 50 píxeles
    } else {
        heroNav.classList.remove('fixed'); // Remueve la clase 'fixed' si se ha desplazado menos de 50 píxeles
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides input[type="radio"]'); // Obtiene todos los inputs de tipo radio dentro del contenedor de slides
    const slideCount = slides.length; // Cuenta el número de slides
    let currentIndex = 0;

    // Función para avanzar al siguiente slide
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount; // Calcula el índice del siguiente slide
        slides[nextIndex].checked = true; // Marca el siguiente slide como seleccionado
        currentIndex = nextIndex; // Actualiza el índice actual
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount; // Calcula el índice del slide anterior
        slides[prevIndex].checked = true; // Marca el slide anterior como seleccionado
        currentIndex = prevIndex; // Actualiza el índice actual
    }

    // Intervalo para avanzar automáticamente cada 5500 milisegundos (5.5 segundos)
    const interval = setInterval(nextSlide, 5500);

    // Event listener para avanzar al siguiente slide al hacer clic en el botón de siguiente
    document.querySelector('.next-slide').addEventListener('click', nextSlide);

    // Event listener para avanzar al slide anterior al hacer clic en el botón de anterior
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);
});

document.addEventListener("DOMContentLoaded", function() {
    var imagen1 = document.getElementById("imagen1"); // Obtiene la primera imagen
    var imagen2 = document.getElementById("imagen2"); // Obtiene la segunda imagen
    var cert1 = document.getElementById("cert1"); // Obtiene el primer certificado
    var cert2 = document.getElementById("cert2"); // Obtiene el segundo certificado
    var cert3 = document.getElementById("cert3"); // Obtiene el tercer certificado
    var cert4 = document.getElementById("cert4"); // Obtiene el cuarto certificado
    var infoContainer = document.getElementById("info-container"); // Obtiene el primer contenedor de información
    var infoContainer2 = document.getElementById("info-container2"); // Obtiene el segundo contenedor de información
    var infoMiniContainer = document.getElementById("info-minicontainer"); // Obtiene el primer mini contenedor de información
    var infoMiniContainer2 = document.getElementById("info-minicontainer2"); // Obtiene el segundo mini contenedor de información
    var infoMiniContainer3 = document.getElementById("info-minicontainer3"); // Obtiene el tercer mini contenedor de información
    var infoMiniContainer4 = document.getElementById("info-minicontainer4"); // Obtiene el cuarto mini contenedor de información

    // Agrega evento clic a la primera imagen
    imagen1.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoContainer); // Obtiene el estilo computado actual del contenedor de información

        if (computedStyle.display === "none") {
            infoContainer.style.display = "block"; // Muestra el contenedor de información
            infoContainer2.style.display = "none"; // Oculta el segundo contenedor de información
        } else {
            infoContainer.style.display = "none"; // Oculta el contenedor de información
            infoContainer2.style.display = "none"; // Asegura que el segundo contenedor de información esté oculto
        }
    });

    // Agrega evento clic a la segunda imagen
    imagen2.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoContainer2); // Obtiene el estilo computado actual del segundo contenedor de información

        if (computedStyle.display === "none") {
            infoContainer2.style.display = "block"; // Muestra el segundo contenedor de información
            infoContainer.style.display = "none"; // Oculta el primer contenedor de información
        } else {
            infoContainer2.style.display = "none"; // Oculta el segundo contenedor de información
            infoContainer.style.display = "none"; // Asegura que el primer contenedor de información esté oculto
        }
    });

    // Agrega eventos clic a los certificados para mostrar/ocultar los mini contenedores de información
    cert1.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoMiniContainer);
        if (computedStyle.display === "none") {
            infoMiniContainer.style.display = "block";
            infoMiniContainer2.style.display = "none";
            infoMiniContainer3.style.display = "none";
            infoMiniContainer4.style.display = "none";
        } else {
            infoMiniContainer.style.display = "none";
        }
    });

    cert2.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoMiniContainer2);
        if (computedStyle.display === "none") {
            infoMiniContainer2.style.display = "block";
            infoMiniContainer.style.display = "none";
            infoMiniContainer3.style.display = "none";
            infoMiniContainer4.style.display = "none";
        } else {
            infoMiniContainer2.style.display = "none";
        }
    });

    cert3.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoMiniContainer3);
        if (computedStyle.display === "none") {
            infoMiniContainer3.style.display = "block";
            infoMiniContainer.style.display = "none";
            infoMiniContainer2.style.display = "none";
            infoMiniContainer4.style.display = "none";
        } else {
            infoMiniContainer3.style.display = "none";
        }
    });

    cert4.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(infoMiniContainer4);
        if (computedStyle.display === "none") {
            infoMiniContainer4.style.display = "block";
            infoMiniContainer.style.display = "none";
            infoMiniContainer2.style.display = "none";
            infoMiniContainer3.style.display = "none";
        } else {
            infoMiniContainer4.style.display = "none";
        }
    });
});

document.addEventListener('scroll', function() {
    var fondos = document.querySelectorAll('.fondo'); // Obtiene todos los elementos con la clase 'fondo'
    var fondos2 = document.querySelectorAll('.fondo2'); // Obtiene todos los elementos con la clase 'fondo2'

    var scrollTop = window.scrollY || document.documentElement.scrollTop; // Obtiene la posición de desplazamiento vertical

    if (scrollTop > 0) { // Si hay desplazamiento, oculta los elementos y los hace no seleccionables
        fondos.forEach(function(fondo) {
            fondo.style.opacity = '0'; // Establece la opacidad a 0
            fondo.style.visibility = 'hidden'; // Oculta la visibilidad
            fondo.style.pointerEvents = 'none'; // Desactiva los eventos del puntero
            fondo.style.display = 'none'; // Establece display a none
        });

        fondos2.forEach(function(fondo2) {
            fondo2.style.opacity = '0'; // Establece la opacidad a 0
            fondo2.style.visibility = 'hidden'; // Oculta la visibilidad
            fondo2.style.pointerEvents = 'none'; // Desactiva los eventos del puntero
            fondo2.style.display = 'none'; // Establece display a none
        });
    } else { // Si no hay desplazamiento, muestra los elementos y los hace seleccionables
        fondos.forEach(function(fondo) {
            fondo.style.opacity = '1'; // Establece la opacidad a 1
            fondo.style.visibility = 'visible'; // Hace visible el elemento
            fondo.style.pointerEvents = 'auto'; // Activa los eventos del puntero
            fondo.style.display = 'block'; // Establece display a block
        });

        fondos2.forEach(function(fondo2) {
            fondo2.style.opacity = '1'; // Establece la opacidad a 1
            fondo2.style.visibility = 'visible'; // Hace visible el elemento
            fondo2.style.pointerEvents = 'auto'; // Activa los eventos del puntero
            fondo2.style.display = 'block'; // Establece display a block
        });
    }
});