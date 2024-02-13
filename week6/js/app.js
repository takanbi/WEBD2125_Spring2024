$(function () {
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".nav-links li");
  let cta = document.querySelector(".cta");
  console.log(navLinks);
  window.addEventListener("mousemove", cursorMovement);
  function cursorMovement(e) {
    // console.log(e);
    //We need pageY and pageX
    mouseCursor.style.top = e.pageY + "px"; //vanilla js
    // mouseCursor.css({"top": e.pageY + 'px'});
    mouseCursor.style.left = e.pageX + "px"; //vanilla js
    // mouseCursor.css({"left": e.pageX + 'px'});
  }
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    });
  });
  cta.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  cta.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  //gsap stuff starts here
  const panel = $('.panel');
  const bulb = $('svg#light');
  const para = $('#para');
  const box = $('.box');
  const cTa = $('.cta');

  let tl = gsap.timeline({
    paused: true
  });

  tl.to(panel, 1.5, {
    scaleY: 1,
    height: '100vh',
    ease: Circ.easeOut
});
tl.to(bulb, 1, {
    opacity: 1,
    y: 0,
    //delay: 1.8, 
    ease: Bounce.easeOut
}, 1);
tl.to(para, 1, {
    opacity: 1,
    y: 20 //,
    // delay: 2.8
});
tl.to(box, 3, {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeOut.config(1, 0.3)
}, '-=2.5')

cTa.click(function () {
    //tl.play()
    tl.reversed(!tl.reversed());
    if (tl.reversed()) { //you can remove the curlys on the if and else
        tl.reverse();
    } else {
        tl.play();
    }
})
  // jQuery ends here
});

