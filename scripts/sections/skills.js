export default function initSkillsAnimation() {

  const skillsSection = document.querySelector("#skills");
  if (!skillsSection) return;

  const bars = skillsSection.querySelectorAll(".bar-fill");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          bars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.width = `${level}%`;
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(skillsSection);
}
