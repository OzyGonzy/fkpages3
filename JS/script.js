const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let menuTimeout;

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' en el menú

    if (navLinks.classList.contains('active')) {
        clearTimeout(menuTimeout); // Cancela cualquier temporizador anterior
        menuTimeout = setTimeout(() => {
            navLinks.classList.remove('active'); // Cierra el menú después de 7 segundos
        }, 1500); // 7000 milisegundos = 7 segundos
    } else {
        clearTimeout(menuTimeout); // Cancela el temporizador si el menú se cierra manualmente
    }
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Si el usuario ha desplazado más de 50px
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    document.getElementById('contact-form').style.display = 'none'; // Oculta el formulario
    document.getElementById('confirmation-message').style.display = 'block'; // Muestra el mensaje de confirmación
});

document.getElementById('contact-again').addEventListener('click', function() {
    document.getElementById('confirmation-message').style.display = 'none'; // Oculta el mensaje de confirmación
    document.getElementById('contact-form').style.display = 'block'; // Muestra el formulario nuevamente
});
