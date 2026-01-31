export function initFadeInObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}
