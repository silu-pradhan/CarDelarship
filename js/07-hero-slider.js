const heroSlides = [
  "assets/images/hero-luxury-car.jpg",
  "assets/images/hero-sports-car.jpg",
  "assets/images/hero-electric-car.jpg"
];

function setupHeroSlider() {
  const heroImage = document.querySelector("#heroImage");
  let activeSlide = 0;

  setInterval(() => {
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroImage.classList.add("is-changing");

    setTimeout(() => {
      heroImage.src = heroSlides[activeSlide];
      heroImage.classList.remove("is-changing");
    }, 350);
  }, 3200);
}
