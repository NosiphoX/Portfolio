export default function initTimeline() {

  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timeline.classList.add("animate");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(timeline);
}
