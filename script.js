// -------------------------

// Smooth Scroll for Nav Links

// -------------------------

document.querySelectorAll('header nav a').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {

      window.scrollTo({

        top: targetSection.offsetTop - 70, // adjust for sticky header

        behavior: "smooth"

      });

    }

  });

});

// -------------------------

// Scroll Reveal Animations

// -------------------------

const revealElements = document.querySelectorAll("section, .skill, .project");

const revealOnScroll = () => {

  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {

    const elementTop = el.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {

      el.classList.add("reveal");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// -------------------------

// Contact Form Feedback

// -------------------------

const form = document.querySelector(".contact form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you for reaching out! I'll get back to you soon.");

    form.reset();

  });

}

// -------------------------

// Mobile Navigation (optional)

// -------------------------

const menuToggle = document.createElement("div");

menuToggle.innerHTML = "☰";

menuToggle.style.fontSize = "1.5rem";

menuToggle.style.cursor = "pointer";

menuToggle.style.display = "none";

document.querySelector("header").prepend(menuToggle);

const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

});

window.addEventListener("resize", () => {

  if (window.innerWidth <= 768) {

    menuToggle.style.display = "block";

    nav.style.display = nav.classList.contains("open") ? "flex" : "none";

    nav.style.flexDirection = "column";

    nav.style.background = "#1c1c1c";

    nav.style.position = "absolute";

    nav.style.top = "70px";

    nav.style.right = "10%";

    nav.style.padding = "1rem";

    nav.style.borderRadius = "8px";

  } else {

    menuToggle.style.display = "none";

    nav.style.display = "flex";

    nav.style.position = "static";

    nav.style.flexDirection = "row";

    nav.classList.remove("open");

  }

});

window.dispatchEvent(new Event("resize"));