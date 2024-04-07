
// nav bar start
$(document).ready(function () {
    $(".res-nav-icon").click(function () {
        console.log("Clicked! ture");
        $(".base").hide();
        $(".res-nav").show();
        // $(".res-nav").toggle("slide", { direction: "left" })
    });

    $(".cancel").click(function () {
        console.log("Clicked! false");
        $(".base").show();
        $(".res-nav").hide();

    });

});
// nav bar end



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

// swiper caorusel start
const swiper = new Swiper('.project-swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination-project',
        type: 'bullets',
        clickable: true,
        // bulletClass: 'my-bullet',
        // bulletActiveClass: 'my-bullet-active',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


// project carousel - end