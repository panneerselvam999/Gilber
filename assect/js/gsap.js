// // nav bar start
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  // markers: true,
  start: "1% top",
  end: "bottom top",
  trigger: "body",
  toggleClass: { targets: "header", className: "base-active" },
});

// // nav bar end

// projects page - start
// banner head
gsap.from(".banner-head", {
  duration: 1,
  y: "100px",
  opacity: 0,
  // scrollTrigger: {
  //     trigger: ".banner-head",
  //     start: "top 50%",
  //     end: "bottom 50%",
  //     toggleActions: "play none none none",
  //     // markers: true,
  // }
});

//banner info
gsap.from(".bi-s", {
  duration: 0.4,
  y: "80px",
  opacity: 0,
  stagger: {
    each: 0.2,
  },
  scrollTrigger: {
    trigger: ".banner-info",
    start: "top 90%",
    // end: "bottom 50%",
    toggleActions: "play none none none",
    // markers: true,
  },
});

//project - info
gsap.from(".project-info-main", {
  y: "90px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".project-info-main p",
    start: "0px 90%",
    // markers: true
  },
});

// breaf
gsap.registerPlugin(ScrollTrigger);
gsap.from(".breaf-sec", {
  duration: 0.4,
  y: "80px",
  opacity: 0,
  stagger: {
    each: 0.2,
  },
  scrollTrigger: {
    trigger: "#breaf-con",
    start: "top 90%",
    // end: "bottom 50%",
    toggleActions: "play none none none",
    // markers: true,
  },
});

// project video play
gsap.from(".project-video-play", {
  y: "90px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".project-video",
    start: "top center",
    // markers: true
  },
});

//resule
gsap.from(".result-gsap", {
  y: "90px",
  opacity: 0,
  stagger: {
    each: 0.3,
  },
  scrollTrigger: {
    trigger: ".result-head",
    start: "top center",
    // markers: true
  },
});

gsap.from(".rh-inner", {
  y: "90px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".result-img",
    start: "bottom center",
    // markers: true
  },
});

// projects page - end
