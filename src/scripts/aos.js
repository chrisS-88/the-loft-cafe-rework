import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  once: true,
  offset: 60,
  easing: "ease-in-out",
});

// Refresh on internal navigation (ClientRouter)
document.addEventListener("astro:page-load", () => {
  AOS.refresh();
});
