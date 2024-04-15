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

// // index page - start
// // home
// const innerDivs = gsap.utils.toArray(".home-content-inner div");

// gsap.from(innerDivs, {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.2,
// });

// //about
// var aboutTimeline = gsap.timeline();
// let r1 = document.querySelector(".r1");
// let r2 = document.querySelector(".r2");
// let r3 = document.querySelector(".r3");

// let webC = document.getElementById("web-count");
// let figmaC = document.getElementById("figma-count");
// let wpC = document.getElementById("wp-count");

// aboutTimeline
//   .from(".aet-head", { y: "100px", opacity: 0 })
//   .from(".aet-content", { y: "100px", opacity: 0 })
//   .from(".web", {
//     y: "100px",
//     opacity: 0,
//     duration: 1,
//     onStart: () => {
//       rangeAnimation(70, r1, webC);
//     },
//   })
//   .from(".figma", {
//     y: "100px",
//     opacity: 0,
//     duration: 1,
//     onStart: () => {
//       rangeAnimation(85, r2, figmaC);
//     },
//   })
//   .from(".wordpress", {
//     y: "100px",
//     opacity: 0,
//     duration: 1,
//     onStart: () => {
//       rangeAnimation(90, r3, wpC);
//     },
//   });

// ScrollTrigger.create({
//   animation: aboutTimeline,
//   trigger: "#about",
//   start: "top center",
//   // markers: true
// });

// let start = 0;
// let intervalId;

// function rangeAnimation(end, range, counter) {
//   intervalId = setInterval(() => {
//     if (start < end) {
//       start++;
//     } else {
//       clearInterval(intervalId);
//       return;
//     }
//     counter.textContent = start + "%";
//     range.style.width = start + "%";
//   }, 10);
// }

// // index page - end

//************************************************************************************************************************* */

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

// *************************************************************************************************

// Blog page start

gsap.from(".blog-banner-inner", {
  y: "100px",
  opacity: 0,
});

// creature
gsap.from(".creature-head", {
  y: "100px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".creature-head",
    start: "top 70%",
    // markers: true
  },
});
gsap.from(".creature-paragrap", {
  y: "100px",
  opacity: 0,
  // stagger: {
  //     each: 0.3,
  // },
  scrollTrigger: {
    trigger: ".creature-paragrap",
    start: "top 70%",
    // markers: true
  },
});

// creature
gsap.from(".mfe-head", {
  y: "100px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".mfe-head",
    start: "top 70%",
    // markers: true
  },
});
gsap.from(".mfe-para", {
  y: "100px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".mfe-para",
    start: "top 70%",
    // markers: true
  },
});

//bqc-con
gsap.from(".blog-quote-con-border", {
  y: "100px",
  opacity: 0,
  scrollTrigger: {
    trigger: ".blog-quote-con-border",
    start: "top 70%",
    // markers: true
  },
});

// Blog page end

// gsap part - end
