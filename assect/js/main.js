$(document).ready(function () {
    $(".res-nav-icon").click(function () {
        console.log("Clicked!");

        $(".res-nav").css("display", "block");
    });

    $(".cancel").click(function () {
        console.log("Clicked!");

        $(".res-nav").css("display", "none");
    });

});



// home page testmonial carousel - start
const carousel = document.querySelector('.tm-carousel');
const slides = document.querySelectorAll('.tm-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Example: Adding event listeners to next and previous buttons
document.querySelector('.ts-next-btn').addEventListener('click', nextSlide);
document.querySelector('.ts-prev-btn').addEventListener('click', prevSlide);

// home page testmonial carousel - end



// project carousel - start
const pro_carousel = document.querySelector('.project-main-in');
const pro_slides = document.querySelectorAll('.project-card');
let pro_currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Example: Adding event listeners to next and previous buttons
document.querySelector('.pro-btn-l').addEventListener('click', nextSlide);
document.querySelector('.pro-btn-r').addEventListener('click', prevSlide);

// project carousel - end