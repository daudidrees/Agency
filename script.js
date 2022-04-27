const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".btn--show-modal");
const closeModal = document.querySelector(".btn--close-modal");
const learnMore = document.querySelector(".header-btn");
const about = document.querySelector("#about");

// For NavBar

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("link")) {
    const link = e.target.closest(".nav").querySelectorAll(".link");
    const logo = e.target.closest(".nav").querySelector("img");

    link.forEach(element => {
      if (element !== e.target) element.style.opacity = 0.5;
      if (element !== e.target) element.style.transition = "all 0.7s";
    });
    logo.style.opacity = 0.5;
    logo.style.transition = "all 0.7s";
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("link")) {
    const link = e.target.closest(".nav").querySelectorAll(".link");
    const logo = e.target.closest(".nav").querySelector("img");

    link.forEach(element => {
      if (element !== e.target) element.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

// For Modal

for (i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});

// For Smooth

learnMore.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});

// Smooth Links

document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// const navHeigth = nav.getBoundingClientRect();

// const obsFunction = function (entries) {
//   entries.forEach(element => {
//     if(!element.isIntersecting){
//       nav.classList.add('sticky');
//       nav.style.transition = 'all 0.5s';
//     } else {
//       nav.classList.remove('sticky')
//     }
//   })
// }

// const obsOption = {
//   root: null,
//   threshold: 0,
//   rootMargin: `-90px`
// }

// const observer = new IntersectionObserver( obsFunction, obsOption);
// observer.observe(about)

// Section Revealing

const allSection = document.querySelectorAll('.section')

const revealSection = function( entries, observe) {
     const [entry] = entries
     console.log(entry);
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.remove("section-hidden");
      entry.target.style.transition = "all 1.5s"
    }

    observe.unobserve(entry.target)
}

const sectionObs = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,
} )


allSection.forEach( function(section) {
   sectionObs.observe(section);
   section.classList.add('section-hidden')
})