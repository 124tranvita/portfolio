// Sidebar menu item elementr
const homeEL = document.querySelector("#home");
const profileEL = document.querySelector("#profile");
const timelineEL = document.querySelector("#timeline");
const skillEL = document.querySelector("#skill");
const projectEL = document.querySelector("#project");

// Main content block
const introBlock = document.querySelector(".intro");
const aboutBlock = document.querySelector(".about");
const timelineBlock = document.querySelector(".timeline");
const skillBlock = document.querySelector(".skills");
const projectBlock = document.querySelector(".project");

// Declare gsap timeline
const intro = gsap.timeline({ defaults: { duration: 1 } });
const about = gsap.timeline({ defaults: { duration: 0.5 } });
const timeline = gsap.timeline({ defaults: { duration: 1 } });
const skills = gsap.timeline({ defaults: { duration: 1 } });
const project = gsap.timeline({ defaults: { duration: 1 } });

// Event function
const menuSelectEvent = (el) => {
  /** Get block element */
  const blockEl = document.querySelector(".active");
  if (blockEl) {
    blockEl.classList.remove("active");
    blockEl.classList.add("hidden");
  }

  el.classList.remove("hidden");
  el.classList.add("active");
};

// Add event to sidebar menu item
homeEL.addEventListener("click", () => menuSelectEvent(introBlock));
profileEL.addEventListener("click", () => menuSelectEvent(aboutBlock));
timelineEL.addEventListener("click", () => menuSelectEvent(timelineBlock));
skillEL.addEventListener("click", () => menuSelectEvent(skillBlock));
projectEL.addEventListener("click", () => menuSelectEvent(projectBlock));

// Add gsap animation to sidebar menu item via click event
homeEL.addEventListener("click", () => {
  intro
    .from(".name", { opacity: 0, y: -40 })
    .from(".short", { scaleX: 0 })
    .from(".social", { opacity: 0 });
});

timelineEL.addEventListener("click", () => {
  timeline
    .from(".line", { scaleX: 0 })
    .from(".school", { x: "-100vw" })
    .from(".work", { x: "-100vw" })
    .from(".funix", { x: "-100vw" });
});

profileEL.addEventListener("click", () => {
  about
    .from(".avatar", { opacity: 0, y: "-100" })
    .from(".info-text", {
      opacity: 0,
      y: -20,
      stagger: 0.5,
      ease: "bounce.out",
    })
    .from(".info-text-2", {
      opacity: 0,
      y: 20,
      stagger: 0.5,
      ease: "bounce.out",
    });
});

skillEL.addEventListener("click", () => {
  skills
    .from("#proficient", { scaleX: 0 })
    .from("#proficientLogo", { x: "-100vw" })
    .from("#intermediate", { scaleX: 0 })
    .from("#intermediateLogo", { opacity: 0 })
    .from("#beginner", { scaleX: 0 })
    .from("#beginnerLogo", { scaleY: 0 });
});

const projectAnimation = (i) => {
  project
    .from(`.background-${i}`, { opacity: 0, height: -100 })
    .from(`.title-${i}`, { opacity: 0, y: -10, duration: 1 })
    .from(`.tech-${i}`, { opacity: 0, x: -20 })
    .from(`.source-${i}`, { opacity: 0 });
};

// Project slide
const items = document.querySelectorAll(".item");

const itemsLength = items.length;

let i = 0;

projectEL.addEventListener("click", () => {
  projectAnimation(i);
});

console.log(itemsLength);

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  items[i].classList.remove("active");
  items[i].classList.add("hidden");

  if (i === 0) {
    console.log("out of range");
    i = itemsLength - 1;
    items[itemsLength - 1].classList.remove("hidden");
    items[itemsLength - 1].classList.add("active");
    projectAnimation(i);
    return;
  }
  items[i - 1].classList.remove("hidden");
  items[i - 1].classList.add("active");
  projectAnimation(i - 1);

  i--;
});

nextButton.addEventListener("click", () => {
  items[i].classList.remove("active");
  items[i].classList.add("hidden");

  if (i >= itemsLength - 1) {
    i = 0;
    items[0].classList.remove("hidden");
    items[0].classList.add("active");
    projectAnimation(i);
    return;
  }

  items[i + 1].classList.remove("hidden");
  items[i + 1].classList.add("active");

  projectAnimation(i + 1);

  i++;
});

// Loader
const loaderEl = document.querySelector(".loader");
const mainEl = document.querySelector(".main");

const loader = ({ loaderEl, mainEl, animation }, t) => {
  let timer;
  timer = setTimeout(() => {
    loaderEl.classList.add("hidden");
    mainEl.classList.remove("hidden");
    animation;
  }, t);
  return () => clearTimeout(timer);
};

const introAnimation = intro
  .from(".name", { opacity: 0, y: -40, delay: 1 })
  .from(".short", { scaleX: 0 })
  .from(".social", { opacity: 0 });

loader({ loaderEl, mainEl, introAnimation }, 1000);
