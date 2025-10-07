document.addEventListener("DOMContentLoaded", () => {

  // --- 1. Hamburger Menu Logic ---
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu li a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  }

  // --- 2. Animate Team Cards on Scroll (Fire-Once) ---
  const teamCardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Stop watching the card after it has animated in
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".team-card").forEach((el) => {
    teamCardObserver.observe(el);
  });

  // --- 3. Hide Header on Scroll Down, Show on Scroll Up ---
  let lastScroll = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove("header-hidden");
      return;
    }

    if (
      currentScroll > lastScroll &&
      !header.classList.contains("header-hidden")
    ) {
      header.classList.add("header-hidden");
    } else if (
      currentScroll < lastScroll &&
      header.classList.contains("header-hidden")
    ) {
      header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
  });

  // --- 4. Animate Perk Cards on Scroll (Fire-Once) ---
  const perkObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Stop watching the perk section after it has animated in
        observer.unobserve(entry.target);
      }
    });
  });

  const perkSections = document.querySelectorAll(".perk-section");
  perkSections.forEach((el) => perkObserver.observe(el));

});
