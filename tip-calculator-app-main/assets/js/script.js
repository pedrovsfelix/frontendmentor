gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  var tl1 = gsap.timeline();
    
  tl1
  .to('.screen-loading', {
    duration: 2,
    opacity: 0, 
    delay: 3,
    ease: "power4.out",
  })
});

ScrollTrigger.addEventListener("scrollStart", () => {

  ScrollTrigger.refresh();

});