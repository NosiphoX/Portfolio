import "./sections/hero.js";
import "./sections/contact.js";
import "./sections/projects.js";
import "./sections/skills.js";
import initSkillsAnimation from "./sections/skills.js";
import initTimeline from "./sections/timeline.js";
import initScrollReveal from "./scrollReveal.js";

initScrollReveal();
initSkillsAnimation();
initTimeline();

console.log("Glass portfolio loaded.");

// Select the hamburger button and nav links
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.main-nav ul');

// Toggle menu on click
navToggle.addEventListener('click', () => {
  // Slide menu in/out
  navLinks.classList.toggle('active');

  // Animate hamburger to X
  navToggle.classList.toggle('open');
});

// Optional: Close menu when clicking a link (nice UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('open');
    }
  });
});
