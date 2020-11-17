const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".letras");

  if (burger) {
    burger.addEventListener("click", () => {
      console.log("me diste clic");
      nav.classList.toggle(".nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
            2}s`;
        }
      });

      burger.classList.toggle("toggle");
    });
  }
};

navSlide();
