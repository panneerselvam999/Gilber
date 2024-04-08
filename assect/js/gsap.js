// nav bar start
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers: true,
    start: "1% top",
    end:"bottom top",
    trigger: "body",
    toggleClass: { targets: "header", className: "base-active" }
});

// nav bar end