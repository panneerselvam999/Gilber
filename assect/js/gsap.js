// // nav bar start
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers: true,
    start: "1% top",
    end: "bottom top",
    trigger: "body",
    toggleClass: { targets: "header", className: "base-active" }
});

// // nav bar end

gsap.to(".banner-head", {
    // markers: true,
    duration: 1, 
    y: "-50px",
    // opacity: 0,
    scrollTrigger: {
        start: "top 50%",
        end: "bottom 50%", 
        toggleActions: "play none none none" 
    }
});

// projects page - end