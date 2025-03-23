
export const setupAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Different animation classes for variety
  const animationVariants = [
    "fade-up",
    "fade-right",
    "fade-left",
    "zoom-in",
    "zoom-out",
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Get the animation type from data attribute or default to fade-up
      const animationType =
        entry.target.getAttribute("data-animation") || "fade-up";
      const animationDelay =
        entry.target.getAttribute("data-animation-delay") || "0";

      if (entry.isIntersecting) {
        // Add animation class and visible class
        entry.target.classList.add("is-visible");
        entry.target.classList.add(`animate-${animationType}`);
        
        // Apply delay if specified
        if (animationDelay !== "0") {
          entry.target.style.animationDelay = `${animationDelay}ms`;
        }
      }
    });
  }, observerOptions);

  // Target elements with animation classes
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => {
    // Randomly assign animation variant if not specifically set
    if (!el.hasAttribute("data-animation")) {
      const randomVariant = animationVariants[
        Math.floor(Math.random() * animationVariants.length)
      ];
      el.setAttribute("data-animation", randomVariant);
    }
    
    observer.observe(el);
  });

  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
  };
};
