// Simple carousel logic
const carousel = document.getElementById("carousel");
let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 4000);
