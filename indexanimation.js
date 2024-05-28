window.addEventListener('scroll', function() {
    const heroNav = document.getElementById('heroNav');
    const heroBackground = heroNav.querySelector('.hero-background');
    const scrollPosition = window.scrollY;

    const opacity = 1 - (scrollPosition / 200); // Calcula la opacidad basada en la posición de desplazamiento

    heroBackground.style.opacity = opacity; // Establece la opacidad de la imagen de fondo

    if (scrollPosition > 50) {
        heroNav.classList.add('fixed');
    } else {
        heroNav.classList.remove('fixed');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides input[type="radio"]');
    const slideCount = slides.length;
    let currentIndex = 0;

    // Función para avanzar al siguiente slide
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        slides[nextIndex].checked = true;
        currentIndex = nextIndex;
    }

    // Función para avanzar al slide anterior
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        slides[prevIndex].checked = true;
        currentIndex = prevIndex;
    }

    // Intervalo para avanzar automáticamente cada cierto tiempo
    const interval = setInterval(nextSlide, 5500);


    // Event listener para avanzar al siguiente slide al hacer clic en el botón de siguiente
    document.querySelector('.next-slide').addEventListener('click', nextSlide);

    // Event listener para avanzar al slide anterior al hacer clic en el botón de anterior
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var heroBackground = document.querySelector('.fondo');
    heroBackground.style.backgroundPositionY = -scrollPosition / 4 + 'px';
});