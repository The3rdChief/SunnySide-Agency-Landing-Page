// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        soft_red: "hsl(7, 99%, 70%)",
        theme_yellow: "hsl(51, 100%, 49%)",
        drk_desat_cyan: "hsl(167, 40%, 24%)",
        dark_blue: "hsl(198, 62%, 26%)",
        drk_mod_cyan: "hsl(168, 34%, 41%)",
        vd_desat_blue: "hsl(212, 27%, 19%)",
        vd_gray_blue: "hsl(213, 9%, 39%)",
        drk_gray_blue: "hsl(232, 10%, 55%)",
        grayish_blue: "hsl(210, 4%, 67%)",
      },
    },
    fontFamily: {
      sans: ["Barlow"],
      serif: ["Fraunces"],
    },
    fontSize: {
      base: "18px",
    },
    fontWeight: {
      light: "600",
      medium: "700",
      thick: "900",
    },
  },
};

// DOM
const navBtn = document.querySelector("#nav-btn");
const navUl = document.querySelector("#navUl");
const scrollIndicator = document.querySelector("#scroll-indicator");
const header = document.querySelector("body > header");
const testimonialUl = document.querySelector("#testimonials");

// toggle hamburger button
navBtn.addEventListener("click", () => {
  let navVisibility = navUl.dataset.status;

  if (navVisibility == "hidden") {
    navUl.dataset.status = "visible";
    scrollIndicator.style.visibility = "hidden";
  } else {
    navUl.dataset.status = "hidden";
    scrollIndicator.style.visibility = "visible";
  }
});

// close navUl on anchor click
anchors = navUl.querySelectorAll("a");

anchors.forEach((anchor) =>
  anchor.addEventListener("click", (e) => {
    navUl.dataset.status = "hidden";
    scrollIndicator.style.visibility = "visible";
  })
);

header.addEventListener("click", (e) => {
  if (navUl.getAttribute("data-status") == "visible") {
    if (e.target.id != "navUl" && e.target.id != "nav-btn") {
      navUl.dataset.status = "hidden";
      scrollIndicator.style.visibility = "visible";
    }
  }
});

// Testimonials
const testimomialsArr = [
  {
    img: "./images/image-emily.jpg",
    alt: "user",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    username: "Emily R.",
    role: "Marketing Director",
  },
  {
    img: "./images/image-thomas.jpg",
    alt: "user",
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    username: "Thomas S.",
    role: "Chief Operating Officer",
  },
  {
    img: "./images/image-jennie.jpg",
    alt: "user",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    username: "Jennie F.",
    role: "Business Owner",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  displayTestimonials(testimomialsArr);
});

function displayTestimonials(testimonials) {
  let displayList = testimonials.map(function (testimonial) {
    return `<li class="flex flex-col gap-8 items-center text-center">
            <div id="pfp" class="rounded-full w-14 h-14 overflow-hidden">
              <img
                src="${testimonial.img}"
                alt="${testimonial.alt}"
                class="w-full h-full object-cover"
              />
            </div>

            <p class="text-vd_gray_blue">
            ${testimonial.text}
            </p>

            <div class="flex flex-col gap-2 items-center text-center">
              <h5
                class="font-serif text-[1.2rem] font-medium text-vd_desat_blue"
              >
              ${testimonial.username}
              </h5>
              <p class="text-[0.8rem] text-grayish_blue">${testimonial.role}</p>
            </div>
          </li>`;
  });

  displayList = displayList.join("");

  testimonialUl.innerHTML = displayList;
}
