Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
  images: ["img6.png", "img5.jpg", "img4.png"],
});

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY / innerHeight); //Updating the scroll
    });
  },
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fImages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,

  },
  y: "-300%",
  ease: Power1
})

  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optional: toggle icon class if you're using Font Awesome
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.classList.remove('fa-moon');
      toggleBtn.classList.add('fa-sun');
    } else {
      toggleBtn.classList.remove('fa-sun');
      toggleBtn.classList.add('fa-moon');
    }
  });

  var tl = gsap.timeline();

 tl.from("#nav h1", {
    opacity:0,
    duration:1,
    delay:1,
    y: -30
 })
 tl.from("#nav a", {
    opacity:0,
    duration:1,
    y:-30,
    stagger:0.3
 })
gsap.from("#fheading h1",{
  opacity:0,
  duration:1,
  x:-90,
  stagger:1,
  scrollTrigger:{
    trigger:"#fheading h1",
    scroller:"body",
    start:"top 60%",
    end:"top 30%",
    scrub:4
  }

})

gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.team-member').forEach((member, i) => {
    gsap.to(member, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: member,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });

  gsap.to(".scrolling-text h1", {
  xPercent: -100,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  }
});


var menu = document.querySelector("#right h6");
var cross = document.querySelector("#full i");

gsap.set("#full", { right: "-100%" }); // now full width


var tl = gsap.timeline()

tl.to("#full",{
    duration: 0.5,
    ease: "power2.inOut",
    right: 0
})
tl.from("#full i", {
    x:150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
}, "-=0.5") 

tl.pause()

menu.addEventListener("click", function() {
   document.body.style.overflow = "hidden";
    tl.play();
});

cross.addEventListener("click", function() {
  document.body.style.overflow = "auto";
    tl.reverse();
});



// Animate the heading
  gsap.from(".objective-section h2,.objective-logo,.objective-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,

    delay: 0.3,
    scrollTrigger: {
      scroller: "body",
      trigger: ".objective-section h2",
      start: "top 80%",
      end: "top 30%",
      scrub: 1
    }
  });

 /* ----------  Button‑controlled scroll (mobile only)  ---------- */
const track  = document.getElementById('memberTrack');
const left   = document.querySelector('.btn-left');
const right  = document.querySelector('.btn-right');

function scrollByAmount(dir){
  const scrollAmount = track.querySelector('.member-card').offsetWidth + 20; // card width + gap
  track.scrollBy({ left: dir*scrollAmount, behavior:'smooth' });
}
left.onclick = () => scrollByAmount(-1);
right.onclick = () => scrollByAmount(1);

/* Hide buttons if grid mode is active (≥ 768 px) */
function toggleNavBtns(){
  const show = matchMedia('(max-width:767px)').matches;
  [left,right].forEach(btn => btn.style.display = show? 'flex' : 'none');
}
toggleNavBtns();
addEventListener('resize',toggleNavBtns);
left.onclick = () => scrollByAmount(-1);  // Remove space after `left`
gsap.utils.toArray('.member-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: card,
      start: 'top 90%',
      toggleActions: 'play none none none',
    }
  });
});
