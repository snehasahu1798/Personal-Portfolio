function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Typing Effect
const roles = [
  "Python Developer",
  "ERPNext Developer",
  "Full Stack Developer",
  "AI Implementation"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex++);
    
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex--);

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// about page content
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".details-container");

hiddenElements.forEach((el) => observer.observe(el));

// paragraph effect
document.addEventListener("DOMContentLoaded", function () {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.25
  });

  const elements = document.querySelectorAll(".details-container, .text-container");

  elements.forEach((el) => {
    observer.observe(el);
  });

});