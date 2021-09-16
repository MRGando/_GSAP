let header = document.getElementById("header");
let loadingPage = document.getElementById("loadingPage");

//loading page vanish
window.addEventListener("load", () => {
  loadingPage.style.opacity = "0";
  setTimeout(() => {
    loadingPage.style.display = "none";
  }, 500);

  //GSAP codes
  gsap.from(".sec3Lines", {
    y: "200px",
    opacity: "0",
    scrollTrigger: {
      trigger: ".sec3Lines",
      toggleActions: "restart none none reverse",
    },
    stagger: 0.2,
  });
  gsap.from(".moon", {
    delay: ".5",
    duration: ".7",
    ease: Back.easeOut.config(1.7),
    opacity: "0",
    scale: ".2",
    transformOrigin: "center",
    scrollTrigger: {
      trigger: ".moon",
      toggleActions: "restart none none none",
      scrub: true,
    },
  });
  gsap.from(".col", {
    delay: ".5",
    duration: ".7",
    ease: Back.easeOut.config(1.7),
    scaleX: "0",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".moon",
      toggleActions: "restart none none none",
      scrub: true,
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      end: "top top",
      trigger: ".sec2",
      toggleActions: "restart none none pause",
      scrub: true,
    },
  });
  gsap.from(".move", {
    y: "-2em",
    ease: "back.out(1.7)",
    opacity: "0",
    duration: "1",
    delay: "0.5",
    stagger: 0.6,
  });
  gsap.from(".image", {
    x: "2em",
    ease: "back.out(1.7)",
    backgroundPosition: "500px 0px",
    opacity: "0",
    duration: "1",
    delay: "2.5",
  });
  tl.from(".sec2Content", {
    y: "-2em",
    ease: "back.out(1.7)",
    opacity: "0",
    duration: "1",
    delay: "0.5",
  });

  //OnScrollDown
  setInterval(() => {
    if (window.scrollY == 0) {
      header.style.padding = "2.5em 5em 0 5em";
      header.style.background = "Transparent";
    } else if (window.scrollY >= 800) {
      header.style.top = "-5em";
    } else {
      header.style.top = "0";
      header.style.padding = "10px 5em 0 5em";
      header.style.background =
        "linear-gradient(rgb(7, 12, 17),rgb(7, 12, 17))";
    }
  }, 100);
});
