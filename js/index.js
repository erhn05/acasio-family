// Carousel
let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll('.carousel-slide');
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}