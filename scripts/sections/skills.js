// hero.js
export default {};
const skillsSection = document.querySelector("#skills");
const revealTrigger = document.querySelector(".skills-next-trigger");

if (skillsSection && revealTrigger) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealTrigger.classList.add("visible");
        }
      });
    },
    {
      threshold: 1
    }
  );

  observer.observe(revealTrigger);
}
