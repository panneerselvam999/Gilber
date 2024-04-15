// loader - start
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});
// loader - end


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


// education carousel start
var swiperEdu = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// education carousel end




// index page - start
// home
const innerDivs = gsap.utils.toArray('.home-content-inner div');

gsap.from(innerDivs, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});


//about
var aboutTimeline = gsap.timeline();
let r1 = document.querySelector(".r1")
let r2 = document.querySelector(".r2")
let r3 = document.querySelector(".r3")

let webC = document.getElementById("web-count")
let figmaC = document.getElementById("figma-count")
let wpC = document.getElementById("wp-count")


aboutTimeline
    .from(".aet-head", { y: "100px", opacity: 0 })
    .from(".aet-content", { y: "100px", opacity: 0 })
    .from(".web", {
        y: "100px", opacity: 0, duration: 1, onStart: () => {
            rangeAnimation(70, r1, webC)
        }
    })
    .from(".figma", {
        y: "100px", opacity: 0, duration: 1, onStart: () => {
            rangeAnimation(85, r2, figmaC)
        }
    })
    .from(".wordpress", {
        y: "100px", opacity: 0, duration: 1, onStart: () => {
            rangeAnimation(90, r3, wpC)
        }
    })

ScrollTrigger.create({
    animation: aboutTimeline,
    trigger: "#about",
    start: "top center",
    // markers: true
});


let start = 0;
let intervalId;

function rangeAnimation(end, range, counter) {
    intervalId = setInterval(() => {
        if (start < end) {
            start++;
        } else {
            clearInterval(intervalId);
            return;
        }
        counter.textContent = start + "%";
        range.style.width = start + '%';
    }, 10);
}

// index page - end


