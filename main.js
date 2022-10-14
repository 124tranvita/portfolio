const menuTemplate = `
<span class="var-highlight">const </span>portfolio = <span class="var-highlight">require('portfolio');</span>
<span class="var-highlight">const</span> menu = [<span class="string-highlight cursor-pointer" id="profile">'profile'</span>, <span class="string-highlight cursor-pointer" id="skills">'skills'</span>, <span class="string-highlight cursor-pointer">'contact'</span>, <span class="string-highlight cursor-pointer" id="project1">'project1'</span>, <span class="string-highlight cursor-pointer" id="project2">'project2'</span>, <span class="string-highlight cursor-pointer" id="project3">'project3'</span>]; 
`;

const profileTemplate = `
<span class="var-highlight">console.log</span>(portfolio['profile']);
<span class="var-highlight">.......</span>
<span class="var-highlight">~/output$: Object</span> {
    name: <span class="string-highlight">'Phuoc Tran'</span>,
    doB: <span class="string-highlight">'1992-08-13'</span>,
    address: <span class="string-highlight">'36 Lang The, Cu Chi, HCMC'</span>,
    education: <span class="string-highlight">'IT Bachelor's degree'</span>,
    job: <span class="string-highlight">'Manual Tester'</span>
};
`;

const skillsTemplate = `
<span class="var-highlight">console.log</span>(portfolio['skills']);
<span class="var-highlight">...</span>
<span class="var-highlight">~/output$: Object</span> {
    basic: [<span class="string-highlight">'HTML'</span>, <span class="string-highlight">'CSS'</span>, <span class="string-highlight">'Javascript'</span>],
    advanced: {
      frontEnd: [<span class="string-highlight">'ReactJS'</span>, <span class="string-highlight">'Bootstrap 5'</span>, <span class="string-highlight">'Tailwincss'</span>],
      backEnd: [<span class="string-highlight">'NodeJS'</span>, <span class="string-highlight">'Python Flask'</span>]
    },
    others:[<span class="string-highlight">'GIT'</span>, <span class="string-highlight">'RESTful API'</span>, <span class="string-highlight">'Teamwork'</span>]
}; 
`;

const project1Template = `
<span class="var-highlight">console.log</span>(portfolio['project1']);
<span class="var-highlight">...</span>
<span class="var-highlight">~/output$: Object</span> {
    piggy: {
      title: <span class="string-highlight">'The happy PiGGY'</span>,
      description: <span class="string-highlight">'A simple budget management web app.'</span>,
      demoURL: <span class="string-highlight">'https://124tranvita.github.io/piggy-ui'</span>,
      frontEnd: [<span class="string-highlight">'ReactJS'</span>, <span class="string-highlight">'TailwindCSS'</span>, <span class="string-highlight">'headlessUI'</span>],
      backEnd: [<span class="string-highlight">'NodeJS'</span>, <span class="string-highlight">'Express'</span>, <span class="string-highlight">'mongoDB'</span>]
      githubURL: <span class="string-highlight">'https://github.com/124tranvita/piggy-ui'</span>
    }
}; 
`;

const project2Template = `
<span class="var-highlight">console.log</span>(portfolio['project2']);
<span class="var-highlight">...</span>
<span class="var-highlight">~/output$: Object</span> {
    gnewsAPI: {
      title: <span class="string-highlight">'Simple NEWS'</span>,
      description: <span class="string-highlight">'A simple daily news website with full responsiveness.'</span>,
      demoURL: <span class="string-highlight">'https://124tranvita.github.io/gnews-api'</span>,
      frontEnd: [<span class="string-highlight">'ReactJS'</span>, <span class="string-highlight">'Redux Toolkit'</span>, <span class="string-highlight">'TailwindCSS'</span>, <span class="string-highlight">'headlessUI'</span>],
      backEnd: <span class="string-highlight">'gnews.io'</span>,
      githubURL: <span class="string-highlight">'https://github.com/124tranvita/gnews-api'</span>
    }
}; 
`;

const project3Template = `
<span class="var-highlight">console.log</span>(portfolio['project3']);
<span class="var-highlight">...</span>
<span class="var-highlight">~/output$: Object</span> {
    maichymp: {
      title: <span class="string-highlight">'Mailchymp API'</span>,
      description: <span class="string-highlight">'A easy Mailchimp Marketing API interactive with Web UI.'</span>,
      demoURL: <span class="string-highlight">'https://mailchympapi.herokuapp.com'</span>,
      frontEnd: [<span class="string-highlight">'Bootstrap 5'</span>, <span class="string-highlight">'Javascript'</span>],
      backEnd: <span class="string-highlight">'Python Flask'</span>,
      githubURL: <span class="string-highlight">'https://github.com/124tranvita/mailchimp-marketing-api'</span>
    },
}; 
`;

const homeEL = document.querySelector("#home");
const profileEL = document.querySelector("#profile");
const timelineEL = document.querySelector("#timeline");
const skillEL = document.querySelector("#skill");
const projectEL = document.querySelector("#project");

// console.log(projectEL);

const introBlock = document.querySelector(".intro");
const aboutBlock = document.querySelector(".about");
const timelineBlock = document.querySelector(".timeline");
const skillBlock = document.querySelector(".skills");
const projectBlock = document.querySelector(".project");

// console.log(projectBlock);

// const menuSelectEvent = (el, animation) => {
//   /** Get block element */
//   const blockEl = document.querySelector(".active");
//   if (blockEl) {
//     blockEl.classList.remove("active");
//     blockEl.classList.add("hidden");
//     animation.timeScale(3);
//     animation.reverse();
//   }

//   el.classList.remove("hidden");
//   el.classList.add("active");
// };

// homeEL.addEventListener("click", () => menuSelectEvent(introBlock));
// profileEL.addEventListener("click", () => menuSelectEvent(aboutBlock));
// timelineEL.addEventListener("click", () => menuSelectEvent(timelineBlock));
// skillEL.addEventListener("click", () => menuSelectEvent(skillBlock));
// projectEL.addEventListener("click", () => menuSelectEvent(projectBlock));

const intro = gsap.timeline({ defaults: { duration: 1 } });
const about = gsap.timeline({ defaults: { duration: 0.5 } });
const timeline = gsap.timeline({ defaults: { duration: 1 } });
const skills = gsap.timeline({ defaults: { duration: 1 } });
const project = gsap.timeline({ defaults: { duration: 1 } });

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

homeEL.addEventListener("click", () => menuSelectEvent(introBlock));
profileEL.addEventListener("click", () => menuSelectEvent(aboutBlock));
timelineEL.addEventListener("click", () => menuSelectEvent(timelineBlock));
skillEL.addEventListener("click", () => menuSelectEvent(skillBlock));
projectEL.addEventListener("click", () => menuSelectEvent(projectBlock));

intro
  .from(".name", { opacity: 0, y: -40 })
  .from(".short", { scaleX: 0 })
  .from(".social", { opacity: 0 });

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
