// Simple carousel logic
const carousel = document.getElementById("carousel");
let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % 2;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 4000);


// gtag-init.js
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-CN02KN9M2K');
